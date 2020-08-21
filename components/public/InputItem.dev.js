"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _jsxFileName="/home/heezjee/desktop/Desktop/cloud-computing_piaic/native-react/todo/components/InputItem.js";var InputItem=function InputItem(_ref){var addHandler=_ref.addHandler;var _useState=(0,_react.useState)(''),_useState2=(0,_slicedToArray2["default"])(_useState,2),newTodo=_useState2[0],setNewTodo=_useState2[1];return _react["default"].createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:11,columnNumber:9}},_react["default"].createElement(_reactNative.TextInput,{style:styles.input,placeholder:"e.g. Start Exercise",onChangeText:function onChangeText(val){return setNewTodo(val);},__source:{fileName:_jsxFileName,lineNumber:12,columnNumber:13}}),_react["default"].createElement(_reactNative.Button,{title:'ADD To-Do',onPress:function onPress(){return addHandler(newTodo);},__source:{fileName:_jsxFileName,lineNumber:17,columnNumber:13}}));};var _default=InputItem;exports["default"]=_default;var styles=_reactNative.StyleSheet.create({input:{position:'absolute',padding:20,marginVertical:50,backgroundColor:'#fff',bottom:0,borderWidth:2,borderRadius:10,borderColor:'dodgerblue',width:'100%',fontSize:21}});