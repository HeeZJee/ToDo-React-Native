"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=App;var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _ItemList=_interopRequireDefault(require("./components/ItemList"));var _Header=_interopRequireDefault(require("./components/Header"));var _InputItem=_interopRequireDefault(require("./components/InputItem"));var _jsxFileName="/home/heezjee/desktop/Desktop/cloud-computing_piaic/native-react/todo/App.js";function App(){initialState=[{todo:"Make breakfast",key:'1'},{todo:"Buy groceries",key:'2'},{todo:"Learn coding",key:'3'},{todo:"Start coding",key:'4'}];var _useState=(0,_react.useState)(initialState),_useState2=(0,_slicedToArray2["default"])(_useState,2),todos=_useState2[0],setTodos=_useState2[1];var delHandler=function delHandler(key){setTodos(function(prevState){return prevState.filter(function(item){return item.key!=key;});});};var addHandler=function addHandler(todo){if(todo.length>2&&todo.length<20){setTodos(function(){return[].concat((0,_toConsumableArray2["default"])(todos),[{todo:todo,key:Math.random().toString()}]);});}else{_reactNative.Alert.alert('Oops!','To-do Must be 3 characters long or 20 characters short.',[{text:'Understood',onPress:function onPress(){return console.log('alert closed');}}]);}};return _react["default"].createElement(_reactNative.TouchableWithoutFeedback,{onPress:_reactNative.Keyboard.dismiss,__source:{fileName:_jsxFileName,lineNumber:36,columnNumber:5}},_react["default"].createElement(_reactNative.View,{style:styles.container,__source:{fileName:_jsxFileName,lineNumber:37,columnNumber:7}},_react["default"].createElement(_Header["default"],{__source:{fileName:_jsxFileName,lineNumber:38,columnNumber:9}}),_react["default"].createElement(_reactNative.View,{style:styles.text,__source:{fileName:_jsxFileName,lineNumber:39,columnNumber:9}},_react["default"].createElement(_ItemList["default"],{todos:todos,delHandler:delHandler,__source:{fileName:_jsxFileName,lineNumber:40,columnNumber:11}})),_react["default"].createElement(_reactNative.View,{style:styles.list,__source:{fileName:_jsxFileName,lineNumber:42,columnNumber:9}},_react["default"].createElement(_InputItem["default"],{addHandler:addHandler,__source:{fileName:_jsxFileName,lineNumber:43,columnNumber:11}}))));}var styles=_reactNative.StyleSheet.create({container:{flex:1,marginTop:_reactNative.StatusBar.currentHeight||0,marginHorizontal:20},text:{flex:1,marginBottom:'30%'},list:{marginBottom:20}});