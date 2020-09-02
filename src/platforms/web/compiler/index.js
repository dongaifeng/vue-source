/* @flow */

import { baseOptions } from './options'
import { createCompiler } from 'compiler/index'
// !!!编译   createCompiler执行 返回编译函数
const { compile, compileToFunctions } = createCompiler(baseOptions)

export { compile, compileToFunctions }
