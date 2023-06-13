import React, { useState } from 'react'
import TreeView from '@mui/lab/TreeView'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import TreeItem from '@mui/lab/TreeItem'
import Typography from '@mui/material/Typography'
import Checkbox from '@mui/material/Checkbox'
import { makeStyles } from '@mui/styles'

import fetchData from './oneLinkData.json'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: '50%',
    backgroundColor: 'transparent',

    "& > .MuiTreeItem-root": {
      border: '1px solid black',
      borderRadius: '10px',
    },
    "& > .MuiTreeItem-root > .MuiCollapse-root": {
      borderTop: '1px solid black',
      marginLeft: '0px',
    },
    "& > .MuiTreeItem-root > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiTreeItem-root": {
      borderBottom: '1px solid black',
    },
    "& > .MuiTreeItem-root > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiTreeItem-root:last-child": {
      borderBottom: 'none',
    },
    
    // "@global": {
    //   ".MuiSvgIcon-root": {
    //     justifyContent: 'flex-end'
    //   },
    //   ".MuiTypography-root": {
    //     backgroundColor: '#fff',
    //     padding: '0px',
    //   },
    //   ".Mui-selected": {
    //     backgroundColor: '#fff'
    //   },
    //   ".MuiTreeItem-iconContainer":{
    //     backgroundColor: '#fff',
    //     padding: '0px'
    //   }
    // },
  },
  content: {
    flexDirection: "row-reverse"
  },
}))

export default function RichObjectTreeView() {
  const [selectedNodes, setSelectedNodes] = useState([])
  const classes = useStyles()

  const handleNodeSelect = () =>{
    console.log('123123')
  }
  const renderTree = (nodes) => (
    <TreeItem 
      key={nodes.rangeId} 
      nodeId={nodes.rangeId} 
      //   label={nodes.name}
      style={{ marginLeft: '0px', backgroundColor: 'transparent' }}
      classes={{
        content: classes.content
      }}
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
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  )

  return (
    <div style={{ margin: '50px' }}>
      <TreeView
        className={classes.root}
        aria-label="rich object"
        defaultCollapseIcon={<ExpandMoreIcon />}
        //   defaultExpanded={['所有範圍']}
        defaultExpanded={['root']}
        defaultExpandIcon={<ChevronRightIcon />}
        //   sx={{ height: 110, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
        multiSelect={true}
      >
        {renderTree(fetchData.data)}
      </TreeView>
    </div>
  )
}

// const renderTree = (nodes: RenderTree, level: number = 1) => {
//     console.log(nodes)
//     console.log(level)
//     return (
//       <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}
//       sx={{
//           ‘.MuiTreeItem-group’: { ml: 0 },
//           ‘.MuiTreeItem-content’: { pl: `${level * 15}px` }
//         }}
//       >
//         {Array.isArray(nodes.children)
//           ? nodes.children.map((node) => renderTree(node, level + 1))
//           : null}
//       </TreeItem>
//     )
//   };