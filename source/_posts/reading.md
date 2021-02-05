---
title: 论文阅读小组
post_meta: false
---

# 论文阅读小组

通关/正在通关6.828的小伙伴们，我们一起来读paper吧！

这是一个以教学为目的的论文阅读小组，在一些学校通常作为OS的后续课程（如Advanced OS）。在这个小组中，我们将了解一些关于操作系统的高级话题，并轮流present一些在计算机系统领域有重要影响力的论文。

## 游戏规则

活动将每周进行一次，每次两小时，每小时一组，每组两人。其中包括20分钟的paper presentation，20分钟的Q&A，以及20分钟的分组讨论（6人一组，presenter和主持人会随机乱逛）。在presentation之前，presenter需要准备以CC BY-NC-SA 4.0开源的slides，并提前上传到本页面，原则上不可以使用他人的slides，但允许使用发表在论文中、或由论文作者提供的图片、表格和代码；presentation的时间分配每人至少五分钟； presentation鼓励使用中文，但不强制。在Q&A环节，除提问者外，鼓励所有人提出问题或者评论，可以是针对论文的，也可以是针对presenter的slides的；若无人主动提问，主持人会钦定提问者。

在每周的活动前，所有组员应自学该周活动对应的参考资料。参考资料包括论文（至少要大概了解）和视频（约每周一小时）。目前，视频主要来自清华大学的高级操作系统（[课程主页](http://os.cs.tsinghua.edu.cn/oscourse/AOS2020)/[B站](https://www.bilibili.com/video/BV1pC4y1x7iw?p=1)），感谢陈渝老师提供这些视频。

长期不来的同学将被移出小组。

## 准入门槛

为保证活动质量（显然，这玩意没什么scalability），论文阅读小组将只对以下三类同学开放：

1. 完成了MIT 6.S081或等效课程（如交大软院的OS、清华u-core、UMich EECS482等手写操作系统的课程）的超过60%的Lab的同学
2. 拿到了博士offer的同学以及一二年级博士生（高年级博士生欢迎作为主持人参加）
3. 曾在CCF C类以上系统会议上发表过论文的同学（作者顺序不限，发了A的就去做主持人吧）

每一轮原则上32人，若人数超标，将照顾第一类同学。

对于没有时间或不满足门槛、但对内容感兴趣的同学，我们也会在[b站上进行直播](http://live.bilibili.com/21829117)，时间为北京时间每周六上午9点到10点半。录播暂定放在[这里](https://space.bilibili.com/6441785)。但是观看直播和录播的同学就没法参与讨论了。

也欢迎访问另一个没有门槛的、以科研为目的的、交流近期paper的讨论小组：https://aegis-readers.github.io/About/

## 报名

请通过以下链接报名：https://forms.gle/YWzrcGSW5q6EWPXy6

## 召唤志愿者/Lecturer

我们热烈欢迎志愿者来做lecture，不限主题、领域、方式、时长、语言。请通过 [GitHub Issues](https://github.com/learn-os-cn/learn-os-cn.github.io/issues) 联系我们，我们会把您的lecture加入下面的时间表。Lecturer可自行选择是否公开视频、slides和文档，以及以哪种协议、在哪个平台公开。

我们也欢迎志愿者对下面的列表进行补充，请通过 [Pull Requests](https://github.com/learn-os-cn/learn-os-cn.github.io/pulls) 提交修改。

我们也欢迎志愿做主持人的老师和同学，请通过 [GitHub Issues](https://github.com/learn-os-cn/learn-os-cn.github.io/issues) 联系我们。

## 参考资料与时间表

### W0：破冰

* 自我介绍、分组、游戏规则
* 时间：北京时间2021年2月6日上午9点到10点半，[直播地址](http://live.bilibili.com/21829117)。

### W1：操作系统

* Video: [THU AOS P7 - P11](https://www.bilibili.com/video/BV1pC4y1x7iw?p=7)
* [The Multikernel: A new OS architecture for scalable multicore systems](https://people.inf.ethz.ch/troscoe/pubs/sosp09-barrelfish.pdf)
  * Presenter: [Zhi Guo](https://github.com/iaGuoZhi)
  * Presenter: [Mingyan Wang](http://mywong.cn)
* [LegoOS: A Disseminated, Distributed OS for Hardware Resource Disaggregation](https://www.usenix.org/system/files/osdi18-shan.pdf) (Is this paper too new? Do we need a more classic one?)

### W2：虚拟化

* Video: [THU AOS P12 - P21](https://www.bilibili.com/video/BV1pC4y1x7iw?p=12)
* [Live Migration of Virtual Machines](https://web.eecs.umich.edu/~mosharaf/Readings/Live-Migrate-VM.pdf)
  * Presenter: ZeJiong Dong & Ruilin Wen
* [Memory Resource Management in VMware ESX Server](https://www.usenix.org/legacy/event/osdi02/tech/full_papers/waldspurger/waldspurger.pdf)
  * Presenter: Jin Zhang

### W3：FPGA上的系统支持、从0开始写系统全家桶

* [Catapult](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/Catapult_ISCA_2014.pdf), [Enzian](http://enzian.systems/), [AmorphOS](https://www.usenix.org/system/files/osdi18-khawaja.pdf), [Optimus](https://dl.acm.org/doi/abs/10.1145/3373376.3378482), and [Coyote](https://www.usenix.org/system/files/osdi20-korolija.pdf) (a bunch of papers in a bundle)
  * Presenter: [Jiacheng Ma](https://jcma.me)
* 在自己写的CPU上用自己写的编译器编译自己写的操作系统并在上面跑自己写的程序
  * Presenter: [Yaotian Feng](https://github.com/codetector1374)

### W4：网络、分布式系统（一）
* [Learning in situ: a randomized experiment in video streaming](https://www.usenix.org/conference/nsdi20/presentation/yan)
  * Presenter: Yuanli Wang @pentium3
* [The Google File System](https://static.googleusercontent.com/media/research.google.com/en//archive/gfs-sosp2003.pdf)
  * Presenter: Xiangyun Ding

### W5：分布式系统（二）
* [MapReduce: Simplified Data Processing on Large Clusters](https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf)
  * Presenter: Wenyan Li
* [Time, Clocks, and the Ordering of Events in a Distributed System](https://lamport.azurewebsites.net/pubs/time-clocks.pdf)
  * Presenter: Junchen Li
  * Presenter: Yi Zhang

### W6：程序分析、Debugging

* [KLEE: Unassisted and Automatic Generation of High-Coverage Tests for Complex Systems Programs](http://www.doc.ic.ac.uk/~cristic/papers/klee-osdi-08.pdf) (Is this the best paper of symbolic execution?)
* [ReVirt: enabling intrusion analysis through virtual-machine logging and replay](https://people.eecs.berkeley.edu/~kubitron/courses/cs262a-F14/handouts/papers/dunlap02.pdf)

### W7：安全和隐私

* [Meltdown](https://meltdownattack.com/meltdown.pdf) and [Specture](https://spectreattack.com/spectre.pdf) (two papers in a pack)
* [TaintDroid: an information-flow tracking system for realtime privacy monitoring on smartphones](https://www.usenix.org/legacy/events/osdi10/tech/full_papers/Enck.pdf)

### W8：GPU

* [gVirt](https://01.org/sites/default/files/documentation/gvirt-final-2_0.pdf) (This may not be the best paper, but it's the first paper in full GPU virtualization. If anyone has a better idea, please overwrite this one.)

* ①GPU & PIM(paper TBD) ②GPU memory optimization during DNN training.
  * Presenters: Siling Yang and Ping Chen

### W9：机器学习
* [TensorFlow: Large-Scale Machine Learning on Heterogeneous Distributed Systems](http://download.tensorflow.org/paper/whitepaper2015.pdf)
  * Presenter: [Jinming Hu](https://conanhujinming.github.io/)
  * Presenter: [Simei He]
* [TVM: An Automated End-to-End Optimizing Compiler for Deep Learning](https://arxiv.org/pdf/1802.04799.pdf)
  * Presenter: [Cong Ding](https://tson1111.github.io/)
* [Retiarii: A Deep Learning Exploratory-Training Framework](https://www.usenix.org/system/files/osdi20-zhang_quanlu.pdf)
  * Presenter: [Xiaohu Tang](https://github.com/tigert1998)

### W10：新内存
* transactional memory
* [FPTree: A Hybrid SCM-DRAM Persistent and Concurrency B-Tree for Storage Class Memory](https://wwwdb.inf.tu-dresden.de/misc/papers/2016/Oukid_FPTree.pdf)
  * Presentor : [Chi Zhang](https://github.com/skyzh), [Siyu Liu](https://github.com/liusy58)
* [Spitfire: A Three-Tier Buffer Manager for Volatile and Non-Volatile Memory](https://zxjcarrot.github.io/publication/spitfire/spitfire.pdf)
  * Presentor : [Xinjing Zhou](https://zxjcarrot.github.io/)

### W11：形式化验证

### W12: Log Structured Merge (LSM) Tree
* [Real-Time LSM-Trees for HTAP Workloads](https://arxiv.org/pdf/2101.06801.pdf)
  * Presentor: [Bowen Xiao](https://github.com/BowenXiao1999)
