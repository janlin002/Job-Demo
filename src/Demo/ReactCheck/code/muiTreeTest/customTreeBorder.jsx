import { useState, useEffect } from "react"
import TreeView from "@material-ui/lab/TreeView"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Checkbox from "@material-ui/core/Checkbox"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import TreeItem from "@material-ui/lab/TreeItem"
import data from "./data.json"
import { makeStyles, withStyles } from '@mui/styles'

// import CustomTreeItem from './customTreeItem'

//BFS algorithm to find node by his ID
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

const useStyles = makeStyles(theme => ({
//   root: {
//     height: 216,
//     flexGrow: 1,
//     maxWidth: 230,
//   },
  test: { 
    "& > .MuiTreeItem-root": {
      border: '1px solid black'
    }
  },
}))

const Index = () => {
//   const classes = useTreeItemStyles()
  const classes = useStyles()
    
  const [selectedNodes, setSelectedNodes] = useState([])
  
  // useEffect(() => {
  //   console.log("Selected Nodes:")
  //   console.log(JSON.stringify(selectedNodes, null, 4))
  // }, [selectedNodes])

  // Retrieve all ids from node to his children's
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

  const handleNodeSelect = (event, nodeId) => {
    event.stopPropagation()
    const allChild = getAllChild(nodeId)
    const fathers = getAllFathers(nodeId)

    if (selectedNodes.includes(nodeId)) {
      // Need to de-check
      setSelectedNodes((prevSelectedNodes) =>
        prevSelectedNodes.filter((id) => !allChild.concat(fathers).includes(id))
      )
    } else {
      // Need to check
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

  const handleExpandClick = (event) => {
    // prevent the click event from propagating to the checkbox
    event.stopPropagation()
  }

  const renderTree = (nodes) => (
    <TreeItem
      key={nodes.id}
      nodeId={nodes.id}
      onClick={handleExpandClick}
      // sx={{ border: "1px solid red" }}
      label={
        <>
          <Checkbox
            checked={selectedNodes.indexOf(nodes.id) !== -1}
            tabIndex={-1}
            disableRipple
            onClick={(event) => handleNodeSelect(event, nodes.id)}
          />
          {nodes.name}
        </>
      }
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  )

  return (
    <>
      <TreeView
        multiSelect
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        selected={selectedNodes}
        className={classes.test}
      >
        {data.map((node) => renderTree(node))}
      </TreeView>
    </>
  )
}

export default Index

// 按鈕右移
// codeSandBox Demo: https://codesandbox.io/s/jovial-scooby-ygcgvf
// stackOverflow Link: https://stackoverflow.com/questions/59819211/how-to-change-the-collapse-expand-icon-to-right-side-of-treeview-of-material

// 是由 "MuiTreeItem-root Mui-expanded"，一層一層包起來，所以沒辦法客製化 border 最外層
