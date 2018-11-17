import { StackNode } from './types';
import * as dtsDom from 'dts-dom';
import ArrayType from './arrayType';
export declare function isEmpty(dts: any[]): boolean;
export declare function topItem<T>(dts: T[]): T;
export declare function isArrCreateNode(node: StackNode): node is ArrayType;
export declare function isInterfaceNode(node: StackNode): node is dtsDom.InterfaceDeclaration;
export declare function whetherTopIsArr(arr: StackNode[]): arr is ArrayType[];
export declare function add(...params: number[]): number;
export declare function genArrType(typeList: dtsDom.Type[]): dtsDom.Type;