/*============================================;
Title: nodebucket;
Author: Professor Krasso ;
Date: 31 March 2021;
Modified By: Douglas Jenkins;
Description: Creating the UI page
;===========================================*/

import { Item } from './item.interface';

export interface Employee {
  empId: string;
  todo: Item[];
  done: Item[];
}
