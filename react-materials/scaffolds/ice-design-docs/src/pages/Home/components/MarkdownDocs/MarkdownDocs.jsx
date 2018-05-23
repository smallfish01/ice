import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './MarkdownDocs.scss';

const initialSource = `

# 关于飞冰

## 目标和愿景

飞冰是一套基于 React 的中后台应用解决方案，在阿里巴巴内部，已经有 270 多个来自几乎所有 BU 的项目在使用。经过 2 年的发展，飞冰已经是中后台 2.0 体系，这个阶段中我们的目标是赋能企业、组织搭建自己的中后台体系。飞冰包含了一条从设计端到开发端的完整链路，帮助我们的用户快速搭建属于自己的中后台应用。

我们希望中后台应用的开发能变得更高效。面向设计者端，我们提供了 ICE Design 设计语言，来给我们的 UI 界面提供专业的视觉指导。面向开发者端，我们提供了 Iceworks 工具，这是一个图形化界面的开发平台，它承载了飞冰的物料体系和开发体验，获取更多信息您可以立即[点击这里](https://alibaba.github.io/ice/iceworks)下载体验。同时，我们还提供了独有的服务体系，在物料与工具这一基础之上进行服务的配套。我们将构建一个面向开发者的服务体系。针对每一个使用飞冰的企业或个人，我们会安排专人客服进行一对一的对接，一旦有问题可以随时找到我们，第一时间帮助解决问题。

## 初心

在整个阿里体系内，面向卖家、运营小二以及达人有数不尽的后台，并且这些后台一直在持续不断的增长着，但是随着时间的推移，这些项目或多或少的存在着以下这些问题

* 每个后台相互独立，同类功能也需要重复开发，前期开发成本较高
* 技术方案差异大，人员变动后维护成本非常高
* 视觉质量参差不齐，使用效率大打折扣
* ...

飞冰就是为了解决这些问题而诞生。飞冰由淘宝前端团队发起，与淘宝 UED 及后端开发同学共同打造，旨在「提高中后台系统的开发效率」。

## 物料体系

在飞冰中，组件、区块、布局、模板等统称为物料，由飞冰团队维护，在内部有一套完整的开发规范和工具，目前也正在逐步对外开放中；基于此，你可以参与共建飞冰，也可以自建私有的物料体系。

* 组件：最基础的物料，目前飞冰的基础组件达到 55+，具有高度可复用性。
* 区块：通过对大量的中后台系统常用的场景进行分类、对比和抽象，基于基础组件组合而成，目前飞冰的区块达到 110+，可以通过 iceworks 进行快速组合搭建应用，减少重复的开发，提升效率。
* 布局：在中后台系统中布局通常较为统一，以 \`顶部-侧边布局-通栏\` 模式为主，为此我们提供了 4+ 常见的布局，支持 \`light\` 和 \`dark\` 两套主题。

## 联系我们

* 邮件：<ice-admin@alibaba-inc.com>
* 反馈/建议：[https://github.com/alibaba/ice/issues/new](https://github.com/alibaba/ice/issues/new)
* 答疑钉钉群：

  ![qr-code](https://img.alicdn.com/tfs/TB1zIh4s_tYBeNjy1XdXXXXyVXa-254-348.png)
`;

export default class MarkdownDocs extends Component {
  static displayName = 'MarkdownDocs';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ReactMarkdown className="markdown-docs-body" source={initialSource} />
      </div>
    );
  }
}
