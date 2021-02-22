#!/usr/bin/env node
const program = require("commander");
const inquirer = require('inquirer');
// 选项列表
let list = [
  {
    type: 'list',
    name: 'single',
    message: '选择其中一个',
    choices: [
      '苹果',
      '香蕉',
      '橘子',
    ]
  },
  {
    type: 'checkbox',
    message: '多选',
    name: 'multiple',
    choices: [
      {
        name: '跑步',
      },
      {
        name: '举哑铃',
      },
      {
        name:"俯卧撑"
      }]
  }
]
/**
 * 捕获命令行输入的参数
 */
program
    .command("create <name>")
    .action(async(res)=>{
      let listRes = await inquirer.prompt(list);
      console.log(listRes)
      console.log(res)
    })

program.parse(process.argv);
