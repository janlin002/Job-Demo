import React, { useState, lazy } from "react";
import { useIntl } from "react-intl";
import { flushSync } from "react-dom";

// test components
import BatchUpdate from "./code/batchUpdate";
import UnControl from "./code/uncontrol";
import RederProps from "./code/renderProps";
import CantChangeProps from "./code/cantChangeProps";
import DataBinding from "./code/dataBinding";
import BetaContext from "./code/betaContext";
import NestedReducer from "./code/nestedReducer";
import EventHandler from "./code/EventHandler";
import StateSnapchat from "./code/stateSnapshot";
// import RenderWhen from './code/renderWhen'
import TwoEffectTest from "./code/twpEffectTest";
import JsxCondition from "./code/jsxCondition";
import UbikeApiTest from "./code/ubikeApiTest";
import MusicDad from "./code/musicDad";
import Promise from "./code/Promise";
import ReactTableSpan from "./code/reactTableSpan";
import ReactTableHeaderGroup from "./code/reactTableHeaderGroup";
import Interview from "./code/interview";
import UseRef from "./code/useRef";
import SyntheticEvent from "./code/syntheticEvent";
const ReactQueue = lazy(() => import("./code/reactQueue"));
const NestComponent = lazy(() => import("./code/nestedComponent"));
const YouDontNeedAnEffect = lazy(() => import("./code/YouDontNeedAnEffect"));
const UseEffectDeeper = lazy(() => import("./code/useEffectDeeper"));
const ViteTest = lazy(() => import("./code/viteTest"));
const ReactSelect = lazy(() => import("./code/ReactSelect"));
const CustomHookTest = lazy(() => import("./code/customHookTest"));
const JsxControlStatement = lazy(() => import("./code/jsxControlStatement"));
const Proxy = lazy(() => import("./code/proxy"));
const Reflect = lazy(() => import("./code/reflect"));
const ChildRender = lazy(() => import("./code/childRender"));
const UseReducer = lazy(() => import("./code/useReducer"));
const ReactEmail = lazy(() => import("./code/reactEmail"));
const HOC = lazy(() => import("./code/HOC"));
const PropsTest = lazy(() => import("./code/propTest"));
const ReactSpring = lazy(() => import("./code/reactSpring"));
const JotaiTest = lazy(() => import("./code/jotaiTest"));
const ReactChecks = lazy(() => import("./code/reduxCheck"));
const NestObject = lazy(() => import("./code/nestObject"));
const DragandDrop = lazy(() => import("./code/DragandDrop"));
const EmptyState = lazy(() => import("./code/emptyState"));
const WindowedObservable = lazy(() => import("./code/windowedObservable"));
const CustomEvents = lazy(() => import("./code/customEvent"));
const MuiAutoComplete = lazy(() => import("./code/muiAutoComplete"));
const ImageLazyImport = lazy(() => import("./code/ImageLazyImport"));
const MuiTreeTest = lazy(() => import("./code/muiTreeTest"));
const SelfPackage = lazy(() => import("./code/selfPackage"));
const ScssExport = lazy(() => import("./code/scssExport"));
const PartyTown = lazy(() => import("./code/partyTown"));
const ReactMention = lazy(() => import("./code/reactMention"));
const MuiTreeSelect = lazy(() => import("./code/muiTreeSelect"));
const Zedux = lazy(() => import("./code/zedux"));
const MuiTableWithDbd = import("./code/muiTableWithDnd");
const FakeTrello = lazy(() => import("./code/fakeTrello"));
const Calculator = lazy(()=>import('./code/calculator'));

const ReactCheck = () => {
  return (
    <>
      <Calculator />
    </>
  );
};

export default ReactCheck;
