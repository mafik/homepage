---
title: Strategy & tactics for automatic meaning extraction
desc_en: 
template: article.pug
date: 2017-05-20
---

# Strategy & tactics for automatic meaning extraction

Automatic techniques struggle to extract meaning out of data. This page gives an overview of general approaches that are used to solve this problem.

Automatic system which extracts and processes meaning in an abstract way is called an _AI_ or _ML_ system. The AI term emphasizes its rational aspect while ML emphasizes its reliance on empirical data.

ML systems find meaningful features from given datasets. A _dataset_ is a set of samples and features. _Features_ are functions which can be applied to samples and produce numerical values. Initial features usually don't correspond well to the meaning of the sample (think of individual pixels in the image). The ML system derives _meaningful_ features from the initial features of a dataset.

Presented approaches are divided into _strategies_ and _tactics_ for ML systems.

## Strategies

Strategy describes the general objective of ML system. It's used to numerically evaluate how meaningful are the derived features.

### Prediction

Some features of the dataset are marked as _labels_. The objective of ML system is to predict labels based on non-label features.

### Compression

The task for ML system is to encode initial features using a smaller set of derived features and then recover the initial features back with minimal error.

### Discrimination

Discrimination is a meta-strategy. It's used in combination with prediction or compression. Discrimination allows the system to make insignificant errors and focus on high-level features.

For prediction: the ML system performs prediction and then attempts to distinguish the correct labels from the predicted ones.

For compression: the ML system performs compression and then attempts to distinguish the original features from the decompressed ones.

## Tactics

Tactics are techniques used to derive meaningful features.

### Expert

The ML system evaluates initial features on a given task. There are some errors. Expert looks at the errors and adds a new feature (derived from already existing features) that could help reduce the error rate. With the new feature the ML system improves and error rate drops. Still, there are some errors. So the expert comes back and the cycle repeats.

The expert tactic (also called feature engineering) is a low-risk investment which lured many practical ML systems. Lack of scalability, high maintenance cost and wide usage of this tactic resulted in bad reputation for the general ML field.

Example areas where the expert tactic fails are: computer vision, speech recognition, machine translation.

### Cascade / hierarchical

Expert writes a set of aggregation functions. The system applies aggregation functions to subsets of the initial features to create derived features. All features are then evaluated. Useless features are dropped and the feature aggregation cycle repeats.

This tactic is used in computer vision, [language processing](http://www.srl.ethz.ch/papers/oopsla16-dt.pdf), decision trees and (fuzzy) logical reasoning systems.

### Divide & conquer

The ML system evaluates feature combinations: one feature is used to split the dataset into categories and other features are evaluated on the individual categories. The best split is retained and the cycle repeats for each new category.

### Relaxation

The ML system is structured so that its outputs are _smoothly_ influenced by its parameters (it's partially _differentiable_ with respect to its parameters). The influence of a parameter is called _derivative_ and all derivatives are jointly called a _gradient_.

Process starts by initializing the parameters so that their influence is similar. ML system computes error gradient for each sample. All gradients are then averaged, scaled by a learning factor and subtracted from the parameter values. The process repeats until the error reaches minimum value.

The final ML system encodes meaning in its intermediate values.

Structure of the ML system is important. Parameters for similar contexts should be shared. ML systems often rely on convolution filters and recursive processing to exploit the structure of initial features.

Practical systems use backpropagation to find error gradients. Computation is often vectorized to improve efficiency.

This tactic is used in deep neural networks and graph-based statistical models. It tends to do well on machine vision, speech recognition and machine translation.