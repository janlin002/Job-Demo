/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TreeView from "@material-ui/lab/TreeView"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import TreeItem from "@material-ui/lab/TreeItem"
import FolderIcon from "@material-ui/icons/Folder"
import Checkbox from "@material-ui/core/Checkbox"

import Button from '@mui/material/Button'

import normalData from './data.json'
import OnelinkData from './oneLinkData.json'
import OneLinkSameLayerData from './oneLinkSameLayer.json'
import OneLinkSameLayerData2 from './oneLinkSameLayer2.json'
import OfficialData from './officialData.json'

const SELECT_ALL = '1'

// const useTreeItemStyles = makeStyles(theme => ({
//   content: {
//     flexDirection: "row-reverse"
//   },
//   labelRoot: {
//     display: "flex",
//     alignItems: "center",
//     padding: theme.spacing(0.5, 0)
//   },
//   labelIcon: {
//     marginRight: theme.spacing(1)
//   },
//   labelText: {
//     fontWeight: "inherit",
//     flexGrow: 1
//   }
// }))

// function StyledTreeItem(props) {
//   const classes = useTreeItemStyles()
//   const { labelText, labelIcon: LabelIcon, ...other } = props

//   return (
//     <TreeItem
//       label={
//         <div className={classes.labelRoot}>
//           <LabelIcon color="action" className={classes.labelIcon} />
//           <Typography variant="body2" className={classes.labelText}>
//             {labelText}
//           </Typography>
//         </div>
//       }
//       classes={{
//         content: classes.content
//       }}
//       {...other}
//     />
//   )
// }

const useStyles = makeStyles(theme => ({
  root: {
    // height: 216,
    flexGrow: 1,
    maxWidth: '50%',

    "& > .MuiTreeItem-root": {
      border: '1px solid #E4E7EC',
      borderRadius: props => (props.isSingleItem && '10px'),
    },
    "& > .MuiTreeItem-root > .MuiTreeItem-root": {
      border: '1px solid #E4E7EC',
      borderRadius: props => (props.isSingleItem && '10px'),
    },
    "& > :first-child": {
      border: '1px solid #E4E7EC',
      borderBottom: props => !props.isSingleItem && '0px',
      borderRadius: props => !props.isSingleItem && '10px 10px 0px 0px'
    },
    "& > :last-child": {
      border: '1px solid #E4E7EC',
      borderTop: props => !props.isSingleItem && '0px',
      borderRadius: props => !props.isSingleItem && '0px 0px 10px 10px'
    },
    "@global": {
      ".MuiSvgIcon-root": {
        justifyContent: 'flex-end'
      },
      ".MuiTypography-root": {
        backgroundColor: '#FFF',
        padding: '0px',
      },
      ".Mui-selected": {
        backgroundColor: '#fff'
      }
    },
  },
  content: {
    flexDirection: "row-reverse"
  },
}))

// expanded => ??
// selectedNodes => 選取的內容

export default function ControlledTreeView() {
  const [isSingleItem, setIsSingleItem] = useState(false) // 是否為所有範圍
  const [expanded, setExpanded] = useState([])
  const [selectedNodes, setSelectedNodes] = useState([])
  const [data, setData] = useState({}) // tree 的資料
  const [isSelectAll, setIsSelectAll] = useState(false)

  const classes = useStyles({ isSingleItem })

  useEffect(()=>{
    setData([chapterOptions(OnelinkData.data)])
  }, [])

  //   useEffect(()=>{
  //     setData(chapterOptions(OneLinkSameLayerData2.data))
  //   }, [])

  // 展開選單
  const handleChange = (event, nodes) => {
    setExpanded(nodes)
  }

  const handleExpandClick = (event) => {
    // prevent the click event from propagating to the checkbox
    event.stopPropagation()
  }
  const bfsSearch = (graph, targetId) => {
    const queue = [...graph]
  
    while (queue.length > 0) {
      const currNode = queue.shift()
      if (currNode.id === targetId) {
        return currNode
      }
      if (currNode.children) {
        queue.push(...currNode.children)
      }
    }
    return [] // Target node not found
  }

  function getAllIds(node, idList = []) {
    idList.push(node.id)
    if (node.children) {
      node.children.forEach((child) => getAllIds(child, idList))
    }
    return idList
  }

  // Get IDs of all children from specific node
  const getAllChild = (id) => {
    return getAllIds(bfsSearch(data, id))
  }

  // Get all father IDs from specific node
  const getAllFathers = (id, list = []) => {
    const node = bfsSearch(data, id)
    if (node.parent) {
      list.push(node.parent)

      return getAllFathers(node.parent, list)
    }

    return list
  }

  function isAllChildrenChecked(node, list) {
    const allChild = getAllChild(node.id)
    const nodeIdIndex = allChild.indexOf(node.id)
    allChild.splice(nodeIdIndex, 1)

    return allChild.every((nodeId) =>
      selectedNodes.concat(list).includes(nodeId)
    )
  }

  // 取得全部資料的id，組成一個新的 Arr
  const extractIds = (data) =>{
    let ids = []
  
    for (const item of data) {
      ids.push(item.id)
  
      if (item.children && item.children.length > 0) {
        ids = ids.concat(extractIds(item.children))
      }
    }
  
    return ids
  }
  
  const idsArray = extractIds(OneLinkSameLayerData2.data)

  // 點擊選取
  const handleNodeSelect = (event, nodeId) => {
    event.stopPropagation()
    const allChild = getAllChild(nodeId)
    const fathers = getAllFathers(nodeId)

    if (selectedNodes.includes(nodeId)) {
      // 取消勾選
      if(nodeId === SELECT_ALL){
        setSelectedNodes([])
        setIsSelectAll(false)
      }else {
        setSelectedNodes((prevSelectedNodes) =>
          prevSelectedNodes.filter((id) => !allChild.concat(fathers).includes(id))
        )
      }
      
    } else {
      // 勾選
      if(nodeId === SELECT_ALL){
        setSelectedNodes(idsArray)
        setIsSelectAll(true)
      }else {
        const ToBeChecked = allChild
        for (let i = 0; i < fathers.length; ++i) {
          if (isAllChildrenChecked(bfsSearch(data, fathers[i]), ToBeChecked)) {
            ToBeChecked.push(fathers[i])
          }
        }
        setSelectedNodes((prevSelectedNodes) =>
          [...prevSelectedNodes].concat(ToBeChecked)
        )
      }
      
    }
  }

  // 其他選項全部勾選的話，要將 selectAll 勾起
  useEffect(()=>{
    if(selectedNodes.includes(SELECT_ALL)){
      if(selectedNodes.length !== idsArray.length){
        // 把 所有範圍 checkbox 取消勾選
        const newNode = [...selectedNodes]
        let index = newNode.indexOf(SELECT_ALL)

        newNode.splice(index, 1)

        // newNode.splice(index, 1)

        setSelectedNodes(newNode)
      }
    }

    if(selectedNodes.length === idsArray.length - 1){
      // 全部勾選，要將 所有範圍 checkbox 補回去
      setSelectedNodes(idsArray)
    }
  }, [selectedNodes])

  // stackOverflow solution
  //
  //   const renderTree = (nodes) => {
  //     return (
  //       <TreeItem
  //         key={nodes?.id}
  //         nodeId={nodes?.id}
  //         onClick={handleExpandClick}
  //         classes={{
  //           content: classes.content
  //         }}
  //         // expanded={expanded.includes(nodes.id)} 
  //         label={
  //           <>
  //             <div className={classes.labelRoot}>
  //               {/* <LabelIcon color="action" className={classes.labelIcon} /> */}
  //               <Typography variant="body2" className={classes.labelText}>
  //                 <Checkbox
  //                   checked={selectedNodes.indexOf(nodes.id) !== -1}
  //                   tabIndex={-1}
  //                   disableRipple
  //                   onClick={(event) => handleNodeSelect(event, nodes.id)}
  //                   style={{ color: '#121232' }}
  //                 />
  //                 {nodes.name} ({nodes.total}題)
  //               </Typography>
  //             </div>
  //           </>
  //         }
  //       >
  //         {Array.isArray(nodes.children)
  //           ? nodes.children.map((node) => renderTree(node))
  //           : null}
  //       </TreeItem>
  //     )
  //   }

  // official solution
  //
  const renderTree = (nodes) => {
    console.log(nodes, nodes.id, 'nodesnodesnodes')

    return (
      <TreeItem 
        key={nodes.id} 
        nodeId={nodes.id} 
        label={
          <>
            <div >
              {/* <LabelIcon color="action" className={classes.labelIcon} /> */}
              <Typography variant="body2">
                <Checkbox
                  checked={selectedNodes.indexOf(nodes.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  onClick={(event) => handleNodeSelect(event, nodes.id)}
                  style={{ color: '#121232' }}
                />
                {nodes.name} ({nodes.total}題)
              </Typography>
            </div>
          </>
        }
        classes={{
          content: classes.content
        }}>
        {Array.isArray(nodes.children)
          ? nodes.children.map((node) => renderTree(node))
          : null}
      </TreeItem>
    )
  }

  const chapterOptions = (jsonObj) => {
    if (jsonObj instanceof Object) {
    //   if ("name" in jsonObj) {
    //     jsonObj["title"] = `${jsonObj["name"]} (${jsonObj["total"]}題)`
    //     delete jsonObj["name"]
    //   }
      if ("rangeId" in jsonObj) {
        jsonObj["id"] = jsonObj["rangeId"]
        delete jsonObj["rangeId"]
      }
      if("versionCode" in jsonObj){
        delete jsonObj["versionCode"]
      }
      //   if("total" in jsonObj){
      //     delete jsonObj["total"]
      //   }
      if ("children" in jsonObj) {
        for (let i = 0; i < jsonObj["children"]?.length; i++) {
          jsonObj["children"][i] = chapterOptions(jsonObj["children"][i])
        }
      }
    }
    return jsonObj
  }

  // const changeIdName = (arrItem) =>{
  //   const newArr = arrItem.map((item)=>{
  //     console.log(item, 'itemitem')
  //     if("rangeId" in item){
  //       item["id"] = item["rangeId"]
  //     }
  //   })

  //   console.log(newArr, 'newArr')
  // }

  useEffect(()=>{
    if([chapterOptions(OnelinkData.data)].length === 1){
      setIsSingleItem(true)
    }else {
      setIsSingleItem(false)
    }
  }, [])

  return (
    <>
      <div>
        {/* <Button
          style={{ border: '1px solid #E4E7EC', width: '571px', borderRadius: '10px' }}
        >
            所有範圍
        </Button>
        <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          expanded={expanded}
          onNodeToggle={handleChange}
        >
          {normalData.map((node) => renderTree(node))}
        </TreeView>
        <Button
          style={{ border: '1px solid #E4E7EC', width: '571px', borderRadius: '10px' }}
        >
            未歸類範圍
        </Button> */}
        {/* <Button>未歸類範圍</Button> */}
      </div>
      
      {/* <hr />
      <div style={{ padding: '20px' }}>
        <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          expanded={expanded}
          onNodeToggle={handleChange}
        >
          {chapterOptions(OneLinkSameLayerData2.data).map((node) => renderTree(node))}
        </TreeView>
      </div> */}
      <hr />

      <div style={{ padding: '20px' }}>
        <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          //   expanded={expanded}
          onNodeToggle={handleChange}
          defaultExpanded={['root']}
          //   defaultExpanded={['root', '1', '2', '5', '-1']}
        >
          {/* {[chapterOptions(OnelinkData.data)].map((node) => renderTree(node))} */}
          {renderTree(chapterOptions(OnelinkData.data))}
          {/* {renderTree(OfficialData)} */}
        </TreeView>
      </div>
    </>
    
  )
}

// 中間需要調整 => ok
// input 框的 border 要調整
// id 不能是 null => 如果不行的話，MUI就不能用了，要改用 antd
// 所有範圍 跟 未歸類範圍 是否可以獨立出來
// id: 1 => 等同全部(選)
// 如果後端可以將所有範圍，寫成跟第一冊同層，就可以解決以上問題
// 前端手動加上 id

// 即使畫面調整，但是一樣會是上層

// 舊的資料
// {
//     children: null
//     key: "111N-EMAB02-5-3-0"
//     title: "[5-3]堆形體 (5題)"
//     total: 5
//     versionCode: "N"
// }

// 新的資料
// {
//     total: 12,
//     id: "111N-EMAB02-5-3-0",
//     name: "第一章_整數運算與科學記號",
// }

{/* <StyledTreeItem nodeId="1" labelText="RSMSSB" labelIcon={FolderIcon}>
      <StyledTreeItem nodeId="2" labelText="Science" labelIcon={FolderIcon} />
      <StyledTreeItem
        nodeId="3"
        labelText="Mathematics"
        labelIcon={FolderIcon}
      >
        <StyledTreeItem
          nodeId="4"
          labelText="Polynomials"
          labelIcon={FolderIcon}
        />
        <StyledTreeItem
          nodeId="7"
          labelText="Inequalities"
          labelIcon={FolderIcon}
        />
      </StyledTreeItem>
      <StyledTreeItem nodeId="8" labelText="English" labelIcon={FolderIcon} />
    </StyledTreeItem> */}
