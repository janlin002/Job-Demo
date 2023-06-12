import React, { useState } from 'react'
import TreeView from '@mui/lab/TreeView'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import TreeItem from '@mui/lab/TreeItem'
import Typography from "@material-ui/core/Typography"
import Checkbox from "@material-ui/core/Checkbox"
import { makeStyles } from "@material-ui/core/styles"

import fetchData from './oneLinkData.json'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: '50%',

    "& > .MuiTreeItem-root": {
      border: '1px solid black',
      borderRadius: '10px'
    },
    "& > .MuiTreeItem-root > .MuiCollapse-root": {
      borderTop: '1px solid black',
      marginLeft: '0px'
    },
    "& > .MuiTreeItem-root > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiTreeItem-root": {
      borderBottom: '1px solid black',
    },
    "& > .MuiTreeItem-root > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiTreeItem-root:last-child": {
      borderBottom: 'none'
    },
    
    "@global": {
      ".MuiSvgIcon-root": {
        justifyContent: 'flex-end'
      },
      ".MuiTypography-root": {
        backgroundColor: '#fff',
        padding: '0px',
        color: 'red',

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
      style={{ marginLeft: '0px' }}
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
    <TreeView
      className={classes.root}
      aria-label="rich object"
      defaultCollapseIcon={<ExpandMoreIcon />}
      //   defaultExpanded={['所有範圍']}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
    //   sx={{ height: 110, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >
      {renderTree(fetchData.data)}
    </TreeView>
  )
}

// MuiCollapse-root MuiCollapse-vertical MuiTreeItem-group MuiCollapse-entered css-g0jugy-MuiCollapse-root-MuiTreeItem-group