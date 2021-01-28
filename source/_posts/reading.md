---
title: 论文阅读小组
post_meta: false
---

# 论文阅读小组

通关/正在通关6.828的小伙伴们，我们一起来读paper吧！

这是一个以教学为目的的论文阅读小组，在一些学校通常作为OS的后续课程（如Advanced OS）。在这个小组中，我们将了解一些关于操作系统的高级话题，并轮流present一些在计算机系统领域有重要影响力的论文。

## 游戏规则

活动将每周进行一次，每次两小时，每小时一组，每组两人。其中包括20分钟的paper presentation，20分钟的Q&A，以及20分钟的分组讨论（6人一组，presenter和主持人会随机乱逛）。在presentation之前，presenter需要准备以CC BY-NC-SA 4.0开源的slides，并提前上传到本页面，原则上不可以使用他人的slides，但允许使用发表在论文中、或由论文作者提供的图片、表格和代码；presentation的时间分配每人至少五分钟； presentation鼓励使用中文，但不强制。在Q&A环节，除提问者外，鼓励所有人提出问题或者评论，可以是针对论文的，也可以是针对presenter的slides的；若无人主动提问，主持人会钦定提问者。

在每周的活动前，所有组员应自学该周活动对应的参考资料。参考资料包括论文（至少要大概了解）和视频（约每周一小时）。目前，视频主要来自清华大学的高级操作系统（[课程主页](http://os.cs.tsinghua.edu.cn/oscourse/AOS2020)/[B站](https://www.bilibili.com/video/BV1pC4y1x7iw?p=1))，感谢陈渝老师提供这些视频。

长期不来的同学将被移出小组。

## 准入门槛

为保证活动质量（显然，这玩意没什么scalability），论文阅读小组将只对以下三类同学开放：

1. 完成了MIT 6.S081或等效课程（如交大软院的OS、清华u-core、UMich EECS482等手写操作系统的课程）的超过60%的Lab的同学
2. 拿到了博士offer的同学以及一二年级博士生（高年级博士生欢迎作为主持人参加）
3. 曾在CCF C类以上系统会议上发表过论文的同学（作者顺序不限，发了A的就去做主持人吧）

每一轮原则上32人，若人数超标，将照顾第一类同学。

对于没有时间或不满足门槛、但对内容感兴趣的同学，我们也会在b站上进行直播。但是观看直播的同学就没法参与讨论了。

也欢迎访问另一个没有门槛的、以科研为目的的、交流近期paper的讨论小组：https://aegis-readers.github.io/About/

## 召唤志愿者/Lecturer

我们热烈欢迎志愿者来做lecture，不限主题、领域、方式、时长、语言。请通过 [GitHub Issues](https://github.com/learn-os-cn/learn-os-cn.github.io/issues) 联系我们，我们会把您的lecture加入下面的时间表。Lecturer可自行选择是否公开视频、slides和文档，以及以哪种协议、在哪个平台公开。

我们也欢迎志愿者对下面的列表进行补充，请通过 [Pull Requests](https://github.com/learn-os-cn/learn-os-cn.github.io/pulls) 提交修改。

我们也欢迎志愿做主持人的老师和同学，请通过 [GitHub Issues](https://github.com/learn-os-cn/learn-os-cn.github.io/issues) 联系我们。

## 参考资料与时间表

### W0：破冰

* 自我介绍、分组、游戏规则

### W1：操作系统

* Video: [THU AOS P7 - P11](https://www.bilibili.com/video/BV1pC4y1x7iw?p=7)
* [The Multikernel: A new OS architecture for scalable multicore systems](https://people.inf.ethz.ch/troscoe/pubs/sosp09-barrelfish.pdf)
* [LegoOS: A Disseminated, Distributed OS for Hardware Resource Disaggregation](https://www.usenix.org/system/files/osdi18-shan.pdf) (Is this paper too new? Do we need a more classic one?)

### W2：虚拟化

* Video: [THU AOS P12 - P21](https://www.bilibili.com/video/BV1pC4y1x7iw?p=12)
* [Live Migration of Virtual Machines](https://web.eecs.umich.edu/~mosharaf/Readings/Live-Migrate-VM.pdf)
* [Memory Resource Management in VMware ESX Server](https://www.usenix.org/legacy/event/osdi02/tech/full_papers/waldspurger/waldspurger.pdf)

### W3：分布式系统

* **Video or invited lecture wanted!**
* [The Google File System](https://static.googleusercontent.com/media/research.google.com/en//archive/gfs-sosp2003.pdf)
* [MapReduce: Simplified Data Processing on Large Clusters](https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf)
* [Time, Clocks, and the Ordering of Events in a Distributed System](https://lamport.azurewebsites.net/pubs/time-clocks.pdf)

### W4：程序分析、Debugging

* [KLEE: Unassisted and Automatic Generation of High-Coverage Tests for Complex Systems Programs](http://www.doc.ic.ac.uk/~cristic/papers/klee-osdi-08.pdf) (Is this the best paper of symbolic execution?)
* [ReVirt: enabling intrusion analysis through virtual-machine logging and replay](https://people.eecs.berkeley.edu/~kubitron/courses/cs262a-F14/handouts/papers/dunlap02.pdf)

### W5：安全和隐私

* [Meltdown](https://meltdownattack.com/meltdown.pdf) and [Specture](https://spectreattack.com/spectre.pdf) (two papers in a pack)
* [TaintDroid: an information-flow tracking system for realtime privacy monitoring on smartphones](https://www.usenix.org/legacy/events/osdi10/tech/full_papers/Enck.pdf)

### W6：FPGA、GPU

* What's the best paper for FPGA? AmorphOS, Coyote, Cascade, or Catapult?
* What's the best paper for GPU/CUDA?

### W7：网络
* Infiniswap?
* What's the best networking paper to read? Find one from Facebook?

### W8：机器学习
* [TensorFlow: Large-Scale Machine Learning on Heterogeneous Distributed Systems](http://download.tensorflow.org/paper/whitepaper2015.pdf)
* [TVM: An Automated End-to-End Optimizing Compiler for Deep Learning](https://arxiv.org/pdf/1802.04799.pdf)

### W9：新内存
* transactional memory
* NVM

### W10：形式化验证
