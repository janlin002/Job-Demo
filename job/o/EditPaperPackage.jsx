import { useState, useEffect } from 'react';
import { ChevronLeftSolid } from '@onedesign/icon';
import { useMachine } from '@xstate/react';
import {
  Button,
  FETCH_DATA_EVENT,
  Input,
  Select,
  Table,
  fetchDataMachine,
} from '@oneclass/ui-components';
import { Checkbox } from 'antd';
import { useLoadingContent } from 'utils/hooks/useLoadingContent';
import { editPaperPackage } from 'api/examPaper';
import {
  StyledBackToList,
  StyledContainer,
  StyledCreatePaperPackage,
  StyledFilter,
  StyledInputRow,
  StyledStep,
  StyledSubTitle,
  StyledTitle,
} from './EditPaperPackage.style';

export const EditPaperPackage = () => {
  const [packageName, setPackageName] = useState('');
  const [pageState, setPageState] = useState({
    currentPage: 1,
    limit: 10,
  });
  const { renderLoadingContent, isLoading, setIsLoading } = useLoadingContent();
  const [stateGetPackageInfo, sendGetPackageInfo] = useMachine(fetchDataMachine, {
    services: {
      fetchData: async (_context, event) => {
        setIsLoading(true);
        const res = await editPaperPackage();
        const { data, isSuccess, systemCode, message } = res;
        console.log(res, 'res');
        setIsLoading(false);
      }
    }
  });

  const backToList = () => {
    console.log('123');
  };

  const pageChange = (currentPage, pageSize) => {
    setPageState({
      ...pageState,
      currentPage,
      limit: pageSize,
    });
  };

  useEffect(() => {
    sendGetPackageInfo(FETCH_DATA_EVENT.FETCH);
  }, []);
  return (
    <StyledCreatePaperPackage>
      <StyledBackToList onClick={backToList}>
        <ChevronLeftSolid />
        <span>返回試卷包列表</span>
      </StyledBackToList>
      <StyledTitle>建立試卷包</StyledTitle>
      <StyledContainer>
        <StyledStep>
          <StyledSubTitle>第一步：試卷包設定</StyledSubTitle>
          <StyledInputRow>
            <div className="label">試卷包名稱</div>
            <Input
              className="input"
              placeholder="輸入"
            //   value={packageName}
            //   onChange={(e) => setPackageName(e.target.value)}
            />
          </StyledInputRow>
        </StyledStep>
        <StyledStep>
          <StyledSubTitle>第二步：選擇試卷</StyledSubTitle>
          {isLoading ? (
            renderLoadingContent()
          ) : (
            <>
              <StyledFilter>
                <Select
                  placeholder="學制科目"
                //   options={eduSubjectOptions}
                //   value={filterParams?.eduSubject}
                //   onChange={(value) => {
                //     setFilterParams({ eduSubject: value });
                //   }}
                />
              </StyledFilter>
              <Table className="table">
                <Table.Header>
                  <Table.Row isFixedWidth={true} className="tableRow">
                    <Table.Item width={'32px'}>
                      <Checkbox
                        style={{ margin: '0 8px' }}
                        // checked={examPaper.length === checkedUids.length}
                        // onChange={(e) => {
                        //   if (e.target.checked) {
                        //     setCheckedUids(examPaper.map(({ uid }) => uid));
                        //   } else {
                        //     setCheckedUids([]);
                        //   }
                        // }}
                        // indeterminate={
                        //   checkedUids.length > 0 &&
                        //   examPaper.length !== checkedUids.length
                        // }
                      />
                    </Table.Item>
                    <Table.Item width={'624px'} className="tableItem">
                      試卷名稱
                    </Table.Item>
                    <Table.Item width={'144px'} className="tableItem">
                      學制科目
                    </Table.Item>
                    <Table.Item width={'160px'} className="tableItem">
                      出卷時間
                    </Table.Item>
                  </Table.Row>
                </Table.Header>
                {/* <Table.Body bodyMaxHeight={true}>
                  {filterData &&
                    filterData.length > 0 &&
                    sliceTableData(
                      filterData,
                      pageState.currentPage,
                      pageState.limit
                    ).map((item) => (
                      <Table.Row
                        key={item.uid}
                        isFixedWidth={true}
                        className="tableRow"
                        onClick={() =>
                          !deviceData.isDesktop && showDetailModal(item)
                        }
                      >
                        {deviceData.isDesktop ? (
                          <>
                            <Table.Item width={'32px'}>
                              <Checkbox
                                style={{ margin: '0 8px' }}
                                checked={checkedUids.includes(item.uid)}
                                onChange={() => handleCheck(item.uid)}
                              />
                            </Table.Item>
                            <Table.Item width={'624px'} className="tableItem">
                              {item.name}
                            </Table.Item>
                            <Table.Item width={'144px'} className="tableItem">
                              {item.eduSubjectName}
                            </Table.Item>
                            <Table.Item width={'160px'} className="tableItem">
                              {format(
                                getTime(new Date(item.updateTime)),
                                'yyyy/MM/dd HH:mm'
                              )}
                            </Table.Item>
                          </>
                        ) : (
                          <>
                            <Table.Item>{item.eduSubjectName}</Table.Item>
                            <Table.Item>{item.name}</Table.Item>
                            <Table.Item>
                              {format(
                                getTime(new Date(item.updateTime)),
                                'yyyy/MM/dd HH:mm'
                              )}
                            </Table.Item>
                          </>
                        )}
                      </Table.Row>
                    ))}
                </Table.Body> */}
              </Table>
              {/* <Pagination
                total={filterData?.length || 0}
                defaultCurrent={1}
                current={pageState.currentPage}
                onChange={pageChange}
                defaultPageSize={pageState.limit}
              /> */}
            </>
          )}
        </StyledStep>
      </StyledContainer>
      <Button
        className="submitButton"
        variant="brand2"
        // onClick={handleSubmit}
        // disabled={isSubmitting || !packageName || !checkedUids.length}
      >
        確定建立
      </Button>
    </StyledCreatePaperPackage>
  );
};