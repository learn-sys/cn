---
title: 论文阅读小组
post_meta: false
---

# 论文阅读小组

通关/正在通关6.828的小伙伴们，我们一起来读paper吧！

这是一个以教学为目的的论文阅读小组，在一些学校通常作为OS的后续课程（如Advanced OS）。在这个小组中，我们将了解一些关于操作系统的高级话题，并轮流present一些在计算机系统领域有重要影响力的论文。

## 游戏规则

活动将每周进行一次，每次两小时，每小时一组，每组两人。其中包括20分钟的paper presentation，20分钟的Q&A，以及20分钟的分组讨论（6人一组，presenter和主持人会随机乱逛）。在presentation之前，presenter需要准备以CC BY-NC-SA 4.0开源的slides，并提前上传到本页面，原则上不可以使用他人的slides，但允许使用发表在论文中、或由论文作者提供的图片、表格和代码；presentation的时间分配每人至少五分钟； presentation鼓励使用中文，但不强制。在Q&A环节，除提问者外，鼓励所有人提出问题或者评论，可以是针对论文的，也可以是针对presenter的slides的；若无人主动提问，主持人会钦定提问者。

在每周的活动前，所有组员应自学该周活动对应的参考资料。参考资料包括论文（至少要大概了解）和视频（约每周一小时）。目前，视频有来自清华大学的高级操作系统（[课程主页](http://os.cs.tsinghua.edu.cn/oscourse/AOS2020)/[B站](https://www.bilibili.com/video/BV1pC4y1x7iw?p=1)），感谢陈渝老师提供这些视频；上海交通大学的操作系统课程（[课程主页](https://ipads.se.sjtu.edu.cn/courses/os)/[B站 MOOC版](https://www.bilibili.com/video/BV18y4y1i73U?p=1)），感谢IPADS实验室的老师们提供这些视频。

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

报名已结束。请想给lecture、talk、office hour的老师和同学提交 [Pull Requests](https://github.com/learn-os-cn/learn-os-cn.github.io/pulls)。

## 召唤志愿者/Lecturer

我们热烈欢迎志愿者来做lecture，不限主题、领域、方式、时长、语言。请通过 [GitHub Issues](https://github.com/learn-os-cn/learn-os-cn.github.io/issues) 联系我们，我们会把您的lecture加入下面的时间表。Lecturer可自行选择是否公开视频、slides和文档，以及以哪种协议、在哪个平台公开。

我们也欢迎志愿者对下面的列表进行补充，请通过 [Pull Requests](https://github.com/learn-os-cn/learn-os-cn.github.io/pulls) 提交修改。

我们也欢迎志愿做主持人的老师和同学，请通过 [GitHub Issues](https://github.com/learn-os-cn/learn-os-cn.github.io/issues) 联系我们。

## 参考资料与时间表

### W0：破冰

* 自我介绍、分组、游戏规则
* 时间：北京时间2021年2月6日上午9点到10点半，[直播地址](http://live.bilibili.com/21829117)，[录播地址](https://www.bilibili.com/video/BV1Ty4y1Y7gB/)。

### W1：操作系统

* Video: [THU AOS P7 - P11](https://www.bilibili.com/video/BV1pC4y1x7iw?p=7)；[论文作者在SOSP2009上的talk](https://www.youtube.com/watch?v=fZt1LILFyXY)
* [The Multikernel: A new OS architecture for scalable multicore systems](https://people.inf.ethz.ch/troscoe/pubs/sosp09-barrelfish.pdf)
  * Presenter: [Zhi Guo](https://github.com/iaGuoZhi)
  * Presenter: [Mingyan Wang](http://mywong.cn)
  * [Slide](https://github.com/iaGuoZhi/PRESENTATION/blob/master/week1-multikernel.pptx)
* 时间：北京时间2021年2月21日上午9点到10点半，[直播地址](http://live.bilibili.com/21829117)，[录播地址](https://www.bilibili.com/video/BV1PU4y1s741/)。

### W2：虚拟化

* Video: [THU AOS P12 - P21](https://www.bilibili.com/video/BV1pC4y1x7iw?p=12)；[IPADS MOS P70 - P87](https://www.bilibili.com/video/BV18y4y1i73U?p=70)
* Paper List - Presenter: ZeJiong Dong & Ruilin Wen
  * [Xen and the Art of Virtualization](https://www.cs.yale.edu/homes/yu-minlan/teach/csci599-fall12/papers/xen.pdf)
  * [My VM is Lighter (and Safer) than your Container](https://dl.acm.org/doi/10.1145/3132747.3132763) (Xen架构的改进，在[THU AOS P12 - P21](https://www.bilibili.com/video/BV1pC4y1x7iw?p=12)课程中已经有讲述)
  * [kvm: the Linux Virtual Machine Monitor](https://www.kernel.org/doc/ols/2007/ols2007v1-pages-225-230.pdf), [KVM/ARM: The Design and Implementation of the Linux ARM Hypervisor](https://www.cs.columbia.edu/~nieh/pubs/asplos2014_kvmarm.pdf) (KVM的概述和在ARM下的实现)
  * [Dune: Safe User-level Access to Privileged CPU Features](https://www.usenix.org/system/files/conference/osdi12/osdi12-final-117.pdf) （利用Intel VT-x虚拟化技术提供进程的抽象,在[THU AOS P12 - P21](https://www.bilibili.com/video/BV1pC4y1x7iw?p=12)课程中已经有讲述）
  * [Arrakis: The Operating System is the Control Plane](https://www.usenix.org/system/files/conference/osdi14/osdi14-paper-peter_simon.pdf) (在硬件提供完善的虚拟化支持下的OS设计)
  * [W2 Slide Part1](https://github.com/ZENOTME/PRESENTATION/blob/master/week2-part1.pdf) 
  * [W2 Slide Part2](https://github.com/ZENOTME/PRESENTATION/blob/master/week2-part2.pdf) 
* [Memory Resource Management in VMware ESX Server](https://www.usenix.org/legacy/event/osdi02/tech/full_papers/waldspurger/waldspurger.pdf)
* [Live Migration of Virtual Machines](https://www.usenix.org/legacy/event/nsdi05/tech/full_papers/clark/clark.pdf)
  * Presenter: Jin Zhang
  * [Slide](/cn/slides/r0/week2-2.pdf)
 * 时间：北京时间2021年2月27日上午9点到11点，[直播地址](http://live.bilibili.com/21829117)，[录播地址](https://www.bilibili.com/video/BV1eK4y1J7Ym/)。

### W3：FPGA上的系统支持、从0开始写系统全家桶

* [Catapult](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/Catapult_ISCA_2014.pdf), [Enzian](http://enzian.systems/), [AmorphOS](https://www.usenix.org/system/files/osdi18-khawaja.pdf), [Optimus](https://dl.acm.org/doi/abs/10.1145/3373376.3378482), and [Coyote](https://www.usenix.org/system/files/osdi20-korolija.pdf)
  * Presenter: [Jiacheng Ma](https://jcma.me)
  * Papers are for reference only; you are not required to read them before the event.
  * [Slide](/cn/slides/r0/week3-1.pdf)
* 在自己写的CPU上用自己写的编译器编译自己写的操作系统并在上面跑自己写的程序
  * Presenter: [Yaotian Feng](https://github.com/codetector1374)
  * [Slide](/cn/slides/r0/week3-2.pdf)
* 时间：北京时间2021年3月6日上午9点到10点半，[直播地址](http://live.bilibili.com/21829117)，[录播地址](https://www.bilibili.com/video/BV1WZ4y1P7Yr/)

### W4：网络、分布式系统（一）
* [Learning in situ: a randomized experiment in video streaming](https://www.usenix.org/conference/nsdi20/presentation/yan)
  * Presenter: Yuanli Wang @pentium3
  * [Slide](https://github.com/pentium3/mlsys_reading/files/5296409/situ.pptx)
* [The Google File System](https://static.googleusercontent.com/media/research.google.com/en//archive/gfs-sosp2003.pdf)
  * Presenter: Xiangyun Ding, Jing Li
  * <a href="https://docs.google.com/presentation/d/1Cov2lkKuf90SisaDh7arrUuu6deVacpOJoLbIYEOgO0/edit?usp=sharing">slide</a>
* 时间：北京时间2021年3月13日上午9点到10点半，[直播地址](http://live.bilibili.com/21829117)，[录播地址](https://www.bilibili.com/video/BV1DN411Q7cJ/)

### W5：分布式系统（二）
* [MapReduce: Simplified Data Processing on Large Clusters](https://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf)
  * Presenter: Wenyan Li
  * Presenter: Hao Feng
  * [Slide](/cn/slides/r0/week5-1.pdf)
* [Time, Clocks, and the Ordering of Events in a Distributed System](https://lamport.azurewebsites.net/pubs/time-clocks.pdf)
  * Presenter: [Junchen Li](https://github.com/lijunchen)
  * Presenter: Yi Zhang
  * [Lamport's comment on this paper](https://lamport.azurewebsites.net/pubs/pubs.html#time-clocks)
  * [Slide](/cn/slides/r0/week5-2.pdf)
* 时间：北京时间2021年3月20日上午9点到10点半，[直播地址](http://live.bilibili.com/21829117)，[录播地址](https://www.bilibili.com/video/BV1y54y187Tn/)

### W6：程序分析、Debugging

* [KLEE: Unassisted and Automatic Generation of High-Coverage Tests for Complex Systems Programs](http://www.doc.ic.ac.uk/~cristic/papers/klee-osdi-08.pdf) (Is this the best paper of symbolic execution?)
  * Presenter: Yongkang Meng
* 时间：北京时间2021年3月27日上午9点到10点半，[直播地址](http://live.bilibili.com/21829117)，[录播地址](https://www.bilibili.com/video/BV1Ty4y1b7iq/)

### W7：安全和隐私
* Host: Yu Liu
* [Meltdown](https://meltdownattack.com/meltdown.pdf) and [Spectre](https://spectreattack.com/spectre.pdf) (two papers in a pack)
  * Presenter: MonKey Lee, Ruilin Wen
* [TaintDroid: an information-flow tracking system for realtime privacy monitoring on smartphones](https://www.usenix.org/legacy/events/osdi10/tech/full_papers/Enck.pdf)
  * Presenter: Xiangfeng Zhu, Haivo

### W8：GPU
* ①GPU & PIM(paper TBD) ②GPU memory optimization during DNN training.
  * Presenters: Siling Yang and Ping Chen

### W9：机器学习（一）
* Host: Zhiqiang
* [TensorFlow: Large-Scale Machine Learning on Heterogeneous Distributed Systems](http://download.tensorflow.org/paper/whitepaper2015.pdf)
  * Presenter: [Jinming Hu](https://conanhujinming.github.io/)
  * Presenter: Simei He
* [TVM: An Automated End-to-End Optimizing Compiler for Deep Learning](https://arxiv.org/pdf/1802.04799.pdf)
  * Presenter: [Cong Ding](https://tson1111.github.io/), rainie

### W10：机器学习（二）
* [Retiarii: A Deep Learning Exploratory-Training Framework](https://www.usenix.org/system/files/osdi20-zhang_quanlu.pdf)
  * Presenter: [Xiaohu Tang](https://github.com/tigert1998), Comzyh
* [Ansor : Generating High-Performance Tensor Programs for Deep Learning](https://arxiv.org/abs/2006.06762)
  * Presenter: Yuhan Liu, weihai 

### W11：新内存
* transactional memory
* [FPTree: A Hybrid SCM-DRAM Persistent and Concurrency B-Tree for Storage Class Memory](https://wwwdb.inf.tu-dresden.de/misc/papers/2016/Oukid_FPTree.pdf)
  * Presentor : [Chi Zhang](https://github.com/skyzh), [Siyu Liu](https://github.com/liusy58)
* [Spitfire: A Three-Tier Buffer Manager for Volatile and Non-Volatile Memory](https://zxjcarrot.github.io/publication/spitfire/spitfire.pdf)
  * Presentor : [Xinjing Zhou](https://zxjcarrot.github.io/)

### W12：计算机网络
* [BBR Congestion-Based Congestion Control](https://dl.acm.org/doi/pdf/10.1145/3012426.3022184)
  * Presentor : Yonghui Zhang
* [Data Center TCP (DCTCP)](https://pages.cs.wisc.edu/~remzi/Classes/739/Fall2015/Papers/dctcp-10.pdf)
  * Presentor : Baochen Qiao

### W13：Log-Structured Merge Trees
* [From WiscKey to Bourbon: A Learned Index for Log-Structured Merge Trees](https://www.usenix.org/system/files/osdi20-dai_0.pdf)
 * Presentor : lambda, [Nope](https://zjs1224522500.github.io/)

### W14: Serverless (?)
* [SAND: Towards High-Performance Serverless Computing](https://www.usenix.org/system/files/conference/atc18/atc18-akkus.pdf)
  * Presentor: Haoqi Zhuang, Weiqi Feng
