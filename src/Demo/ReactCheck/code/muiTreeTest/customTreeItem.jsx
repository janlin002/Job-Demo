/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TreeView from "@material-ui/lab/TreeView"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import TreeItem from "@material-ui/lab/TreeItem"
import FolderIcon from "@material-ui/icons/Folder"
import Checkbox from "@material-ui/core/Checkbox"

import data from './data.json'

const useTreeItemStyles = makeStyles(theme => ({
  content: {
    flexDirection: "row-reverse"
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.5, 0)
  },
  labelIcon: {
    marginRight: theme.spacing(1)
  },
  labelText: {
    fontWeight: "inherit",
    flexGrow: 1
  }
}))

function StyledTreeItem(props) {
  const classes = useTreeItemStyles()
  const { labelText, labelIcon: LabelIcon, ...other } = props

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="action" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
        </div>
      }
      classes={{
        content: classes.content
      }}
      {...other}
    />
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    height: 216,
    flexGrow: 1,
    maxWidth: '100%',

    "& > .MuiTreeItem-root": {
      border: '1px solid black',
    },
    "& > :first-child": {
      border: '1px solid red',
      borderRadius: '10px 10px 0px 0px'
    },
    "& > :last-child": {
      border: '1px solid red',
      borderRadius: '0px 0px 10px 10px'
    },
    // ".MuiSvgIcon-root": {
    //   justifyContent: 'flex-end'
    // },
    // "& > .MuiSvgIcon-root":{
    //   float: 'right'
    // }
    "@global": {
      ".MuiSvgIcon-root": {
        justifyContent: 'flex-end'
      },
    },
  },
//   test: { 
//     "& > .MuiTreeItem-root": {
//       border: '1px solid black'
//     }
//   },
}))

export default function ControlledTreeView() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState([])
  const [selectedNodes, setSelectedNodes] = useState([])

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

  //   label={
  //   <div className={classes.labelRoot}>
  //     <LabelIcon color="action" className={classes.labelIcon} />
  //     <Typography variant="body2" className={classes.labelText}>
  //       {labelText}
  //     </Typography>
  //   </div>
  //   }

  const renderTree = (nodes) => (
    <TreeItem
      key={nodes.id}
      nodeId={nodes.id}
      onClick={handleExpandClick}
      label={
        <>
          <div className={classes.labelRoot}>
            {/* <LabelIcon color="action" className={classes.labelIcon} /> */}
            <Typography variant="body2" className={classes.labelText}>
              <Checkbox
                checked={selectedNodes.indexOf(nodes.id) !== -1}
                tabIndex={-1}
                disableRipple
                onClick={(event) => handleNodeSelect(event, nodes.id)}
              />
              {nodes.name}
            </Typography>
          </div>
        </>
      }
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  )

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      onNodeToggle={handleChange}
    //   className={classes.test}
    >
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
      {data.map((node) => renderTree(node))}
    </TreeView>
  )
}

// 中間需要調整
