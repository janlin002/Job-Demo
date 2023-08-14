import React, { useEffect, useContext, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useLoadingContent } from 'utils/hooks/useLoadingContent';
import { useMachine } from '@xstate/react';
import behaviorProvider from 'providers/behaviorProvider';
import { Button } from '@oneclass/onedesign';
import { useBoolean } from 'ahooks';
import { getTime, format } from 'date-fns';
import { FileDownloadSolid, FolderSolid, EyeSolid, CopySolid ,
  ChevronLeftSolid,
} from '@onedesign/icon';
import { blobDownload } from 'utils/common';
import {
  Tooltip
} from 'antd';
import {
  Box,
  Table,
  fetchDataMachine,
  FETCH_DATA_EVENT,
  Pagination,
  sliceTableData,
  Modal,
  openNotificationWithIcon
} from '@oneclass/ui-components';
import {
  StyledMyPaperDetailPage,
  StyledBackToList,
  StyledMyPaperDetailContent,
  StyledDetailModal
} from './MyPaperDetailPage.style';
import { getPaperPackageInfo, deletePaperPackage } from 'api/examPaper';
import * as GA from 'utils/googleAnalytics';

export const MyPaperDetailPage = () => {
  const history = useHistory();
  const { redemptionCode } = useParams();
  const [pageState, setPageState] = useState({
    currentPage: 1,
    limit: 10,
  });
  const [modalInfo, setModalInfo] = useState(null);
  const { renderLoadingContent, isLoading, setIsLoading } = useLoadingContent();
  const { behaviorDataProviderChange } = useContext(behaviorProvider.behaviorProviderContext);
  const [modalVisible, { toggle: setModalToggle, setFalse: setModalFalse }] = useBoolean(false);
  const [infoModalVisible, { toggle: setInfoModalToggle, setFalse: setInfoModalFalse }] = useBoolean(false);
  const oneExamUrl = `${process.env.REACT_APP_ONE_EXAM_DOMAIN}/paper/preview`;
  const { packageName, updateTime } = history.location.state;

  const backToList = () => {
    behaviorDataProviderChange('goToPackageList', true);
    history.push('/examPaperList');
  };
  const [statePaperPackageInfo, sendPaperPackageInfo] = useMachine(
    fetchDataMachine, {
      services: {
        fetchData: async(_context, event) => {
          setIsLoading(true);
          const res = await getPaperPackageInfo(event.payload);
          const { isSuccess, systemCode, message, data } = res;
          setIsLoading(false);

          return {
            isSuccess, systemCode, message,
            paperDetail: data,
          };
        }
      }
    }
  );

  const { paperDetail } = statePaperPackageInfo.context.result || {};

  // 刪除試卷包
  const [_, sendDeletePaperPackage] = useMachine(
    fetchDataMachine, {
      services: {
        fetchData: async(_context, event) => {
          const res = await deletePaperPackage(event.payload);
          const { isSuccess, systemCode, message } = res;
          if (isSuccess) {
            openNotificationWithIcon('success', '成功刪除測驗');
            setModalFalse();
            behaviorDataProviderChange('goToPackageList', true);
            history.push('/examPaperList');
          } else {
            openNotificationWithIcon('error', message);
          }

          return {
            isSuccess, systemCode, message,
          };
        }
      }
    }
  );

  const getPackageInfo = () => {
    const payload = { redemptionCode: redemptionCode };
    sendPaperPackageInfo(FETCH_DATA_EVENT.FETCH, { payload });
  };

  const pageChange = (currentPage, pageSize) => {
    setPageState({
      ...pageState,
      currentPage,
      limit: pageSize,
    });
  };

  const showDetailModal = (data) => {
    if (!data) return;
    setModalInfo(data);
    setInfoModalToggle();
  };

  const goToExamPage = (examUID) => {
    if (!examUID) return;
    window.open(`${oneExamUrl}/${examUID}`);
  };

  const goToEditPackage = () => {
    history.push('/examPaperList/editPaperPackage');
  };

  useEffect(() => {
    if (!redemptionCode) return;
    getPackageInfo();
  }, [redemptionCode]);

  return (
    <StyledMyPaperDetailPage>
      <StyledBackToList onClick={backToList}>
        <ChevronLeftSolid/>
        <span>返回試卷包列表</span>
      </StyledBackToList>

      <StyledMyPaperDetailContent>
        <div className='header'>
          <div className="title">
            <FolderSolid style={{ fontSize: '24px' }} />
            {packageName}
          </div>
          <div className="buttonGroup">
            <Button
              className='btn outlined'
              onClick={() => setModalToggle()}
            >
                刪除試卷包
            </Button>
            <Button
              className='btn outlined'
              onClick={() => goToEditPackage()}
            >
                編輯
            </Button>
            <Tooltip
              trigger="click"
              title={
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    columnGap: '4px',
                  }}
                >
                  <img src="/assets/checkCircle.svg" alt="" />
                  <span>已複製</span>
                </div>
              }
              onVisibleChange={(visible) => {
                if (visible) {
                  navigator.clipboard.writeText(
                    redemptionCode
                  );
                }
              }}
            >
              <Button
                variant="brand2"
                className="btn"
              >
                <CopySolid />
                複製授權碼
              </Button>
            </Tooltip>

          </div>
        </div>
        <div className="lastEditTime">
        上次更新時間：{format(getTime(new Date(updateTime)), 'yyyy/MM/dd HH:mm')}
        </div>
        <Box>
          <Table className="tableZone">
            <Table.Header>
              <Table.Row>
                <Table.Item flex="1">試卷名稱</Table.Item>
                <Table.Item width="89px" flex="none">
                      學制科目
                </Table.Item>
                <Table.Item width="144px" flex="none">
                      出卷時間
                </Table.Item>
                <Table.Item width="144px" flex="none">
                      共享時間
                </Table.Item>
                <Table.Item width="116px" flex="none" />
              </Table.Row>
            </Table.Header>
            {
              isLoading ? (
                renderLoadingContent()
              ) : (
                <Table.Body bodyMaxHeight={true}>
                  {
                    paperDetail?.papers &&
                    sliceTableData(paperDetail?.papers, pageState.currentPage, pageState.limit).map((item) => (
                      <Table.Row key={item.paperId}>
                        <Table.Item flex="1">
                          {item.paperName}
                        </Table.Item>
                        <Table.Item width="89px" flex="none">
                          {item.eduSubject}
                        </Table.Item>
                        <Table.Item width="144px" flex="none">
                          {format(getTime(new Date(item.createTime)), 'yyyy/MM/dd HH:mm')}
                        </Table.Item>
                        <Table.Item width="144px" flex="none">
                          {format(getTime(new Date(item.shareTime)), 'yyyy/MM/dd HH:mm')}
                        </Table.Item>
                        <Table.Item width="116px" flex="none">
                          <Button
                            className="tableBtn outlined"
                            onClick={() => showDetailModal(item)}
                          >
                            試卷詳情
                          </Button>
                        </Table.Item>
                      </Table.Row>
                    ))
                  }
                </Table.Body>
              )
            }
          </Table>
          <div className="pageBlock">
            <Pagination
              total={paperDetail?.papers?.length || 0}
              defaultCurrent={1}
              current={pageState.currentPage}
              onChange={pageChange}
              defaultPageSize={pageState.limit}
            />
          </div>
        </Box>
      </StyledMyPaperDetailContent>
      <Modal
        visible={modalVisible}
        onCancel={setModalFalse}
        className={'mobileModal'}
        title={
          <div>確定要刪除嗎？</div>
        }
        footer={
          <div className="footerBtn footerBtnBox">
            <Button
              variant={'brand1'}
              onClick={() => {
                sendDeletePaperPackage(FETCH_DATA_EVENT.FETCH, {
                  payload: {
                    redemptionCode: redemptionCode
                  }
                });
              }}>
                確定刪除
            </Button>
          </div>
        }
      >
        <div>若刪除本試卷，將無法與其他老師共享試卷資源。</div>
      </Modal>
      {
        modalInfo && (
          <StyledDetailModal>
            <Modal
              id={'detailModal'}
              visible={infoModalVisible}
              onCancel={setInfoModalFalse}
              title={
                <div>{modalInfo.paperName}</div>
              }
              width={'860px'}
            >
              <div className="modalContent">
                <div className="modalRow">
                  <Box style={{ marginBottom: '4px' }}>
                    <div className="modalInnerTitle">試卷資料</div>
                    <div className="modalInnerContent">
                      <div className="modalInfoRow"><div>學制科目</div><span>{modalInfo.eduSubject}</span></div>
                      <div className="modalInfoRow"><div>命題方式</div><span>{modalInfo.drawUpStyle}</span></div>
                      <div className="modalInfoRow"><div>試卷類型</div><span>{modalInfo.outputStyle}</span></div>
                      <div className="modalInfoRow"><div>出卷時間</div><span>{format(getTime(new Date(modalInfo.createTime)), 'yyyy/MM/dd HH:mm')}</span></div>
                      <div className="modalInfoRow"><div>卷號</div><span>{modalInfo.paperId}</span></div>
                    </div>
                  </Box>
                  <Box>
                    <div className="modalInnerTitle">試卷內容</div>
                    <div className="modalInnerContent">
                      <div className="modalInfoRow"><div>題數</div><span>{modalInfo.questionCount}</span></div>
                    </div>
                  </Box>
                </div>
                <div className="modalRow controlBox">
                  <div className="modalInnerTitle">操作</div>
                  <div className="modalInnerContent">
                    <Box>
                      <div className='copyEditBtnBox'>
                        <Button
                          variant="brand2"
                          onClick={() => {
                            goToExamPage(modalInfo.paperId);
                            GA.previewPaper();
                          }}
                        >
                          <EyeSolid /> 預覽試卷
                        </Button>
                        <Button
                          // variant="brand2"
                          variant={(modalInfo.downloadName && modalInfo.download) ? 'brand2' : 'ui02'}
                          disabled={!(modalInfo.downloadName && modalInfo.download)}
                          onClick=
                            {
                              () => {
                                blobDownload(
                                  modalInfo.download,
                                  modalInfo.downloadName,
                                  'GET'
                                );
                              }
                            }
                        >
                          <FileDownloadSolid />
                          下載試卷
                        </Button>
                      </div>
                    </Box>
                  </div>
                </div>
              </div>
            </Modal>
          </StyledDetailModal>
        )
      }

    </StyledMyPaperDetailPage>
  );
};

export default MyPaperDetailPage;