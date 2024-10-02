* TODO: switch to muscle memory / immersiveness
* TODO: compiz example

# Invisible UI 1:00

This is a presentation for all sorts of interface designers. Interface is something that stands between a user and a system. We're talking about graphical user interfaces, command line interface, webpages, apps... So really if you're making any type of application, you're probably designing an interface to some degree.

The goal of the interface is to make it as easy and natural as possible for the user to interact with the system.

The best user interface is one where the user thoughts are immediately transported into actions in the problem domain. And the state of problem domain is immediately translated into the thoughts of the user.

A good interface should be essentially invisible.

This is all very basic, I'm sure you all know that already, but let me bring up another concept called automaticity.

# Automaticity 2:00

The proper name for this is actually "procedural memory", or "muscle memory". People can learn to instinctively use tools like a mouse, or a gamepad. While they use them they may almost forget that they're interacting through those devices.

Automaticity is also present in all sorts of domain experts. One might even say that automaticity if what distinguishes experts from novices. When an expert chess player thinks about a game, they don't think about moves of individual chess pieces, but instead they recognize patterns of pieces and how they interact. They play the game on a higher level of abstraction. Movement of invididual pieces is automatic.

I'm bringing automaticity to show you an interesting connection that ties it to interface design:

<triangle>expertise ~= automaticity ~= interface invisibility

Generally speaking, when somebody is an expert in some domain, they're almost certainly developed some level of automaticity in their thinking. But the same thing can be gained from a good user interface - it enables users to gain automaticity quickly, to become experts, thanks to good user interface construction.

There is a quote that in order to become an expert you have to spend 10'000 hours practicing a skill. A good user interface is a shortcut that can help cut that time significantly.

In this presentation I'll talk about some techniques that can be used to help with development of automaticity in users. Techniques that can be used to quickly and effortlessly signal to the user how an app works - to build a better mental model of the system.

# Non-goal: conditioning 1:30

I'm certain that most of you are aware of the Pavlovian reflex. Its name comes from a scientist who would ring a bell and then feed the dogs. After some time the dogs would salivate at just the sound of the bell.

Although this learning mechanim is mostly known from the animal kingdom, it works just as well in humans.

I'm mentioning the pavlovian reflex because it can be used to develop procedural memory, but the the underlying mechanism behind conditioning and procedural memory seems to be different!

In order for conditioning to happen, there must be a latency between stimulus and the reward. There is also an optimal latency where the learning is the fastest. If the stimulus starts at the same time as the reward, the learning doesn't happen. This is different from procedural memory, where the learning is fastest when the feedback is immediate.

Another difference between conditioning and procedural memory is that procedural memory requires the person to have a mental model of the task, and even execute the task in their thoughts, while in conditioning, the person doesn't need to understand the task at all.

So despite conditioning being a very practical technique, and very popular in games, I'm not going to talk about it here.

# Non-goal: bandwidth maximization 1:30

There is a very powerful model of user interfaces that was introduced by Fitts in 1954, where the user interface can be seen as a noisy channel between the user and the system. In this model, user interface designer is trying to maximize the bandwidth of the channel.

I want to highlight this model because latency (which is the main focus of this presentation) is completely orthogonal to bandwidth. It is a good, scientific model, same as classical conditioning, that can be used to design user interfaces, but it's not relevant for procedural memory, which is what we want to develop.

In the Fitt's model, it's possible to construct an interface with very high bandwidth, but also extremely high latency. This is not a good interface because it doesn't stimulate the neural pathways that are responsible for procedural memory.

So to summarize, in this presentation I'm going to give you some tricks that can be used to minimize latency and stimulate procedural memory. None of the tricks here are going to help with conditioning or bandwidth maximization. The core principle that underlies all of the tricks is that by minimizing latency we can stimulate procedural memory better.

# Agenda 0:30

I've already told you about the goal of responsive user interfaces. I will tell you about some techniques that we can use when animating things on screen, then present some formulas for animating values in a responsive way, how to tie them to more complex actions such as drag & drop. And finally give some miscelenaous tips that can help along the way.

; With the introduction out of the way, let's talk about animation

# Animation techniques 1:30

There are many types of animation, but not all of them are equally useful in the context of user interface.

Great deal of animation techniques come from motion picture industry and are therefore based on timelines. Timeline-based animations can be either composed of curves, where animator manually adjusts the function that controls movement based on time, or motion-capture, where the movement is recorded from motion sensors, or stop-motion animation, where the movement is recorded frame by frame.

This kind of animation has some facilities built into HTML, so if you can record some movement as a sequence of curves, or a sequence of values, you can pretty much paste this into CSS @keyframes block and bam - you have an animation.

This approach works well in storytelling, but is difficult to synchronize with user interface. Quick state changes produce discontinuities in the animation, which can be jarring.

Take a look at what happens when I switch slides. The slides switching uses the smooth scrolling built into HTML. When I quickly change slides, you can see that the browser is restarting the animation after each key press which causes sudden jumps in the animation.

Unfortunately, the designers of CSS animations relied on traditional animation techniques which don't work well with interactive systems.

# Procedural animation 1:30

Another kind of animation which is driven by code, rather than a timeline, is called procedural animation. One kind of procedural animation uses physical simulations which are affected by user input and in turn, affects the displayed user interface. Those are simulation-based animations.

This approach is quite popular in games and can produce nice results but needs special care. There are three areas which are problematic and require nuance:

* first there is a springy behavior which can happen when user input is badly connected to the physics engine
* then there is a latency & determinism tradeoff when simulation tick-rate differs from the display refresh rate, you may be familiar with games that have to run at exactly 30 fps because otherwise the physics behaves differently. This is actually rather difficult to solve.
* lastly there is subtle issue around power-efficiency - some care must be taken to avoid continuous CPU usage

All of those problems can be worked around, but require great care. Simulation-based animation is probably the most powerful but also the most complex technique.

# Analytical approach 1:30

There is one more technique, which is going to be the basis for all the tricks that I'll show. It can be seen as a twin of simulation-based animation - which is based on taking the simulation and then converting it into a function. Unlike the timeline-based animation, the function can be re-computed at a low cost at every frame, so the animation adapts to the dynamically changing state of the system.

So if you think for example about a gravity simulation of a planet orbiting a star. We could imagine a planet orbiting a cursor. But because the properties of this orbit never change, we don't really have to simulate it. We can compute the position of the planet at any given time. Only when the cursor moves we have to recompute the orbit parameters.

Contrary to simulation-based animation, this kind of animation doesn't have the latency issues and it also behaves the same regardless of the display refresh rate.

The biggest limitation is that it can only be applied to very simple systems. A three-body gravity interaction would be out of reach of this technique.

Generally speaking this technique works nicely in situations where there is no interaction between multiple elements.

To the best of my knowledge, there is no name for this kind of animation, but because it relies on solving equations and finding a formula for the animation trajectory, I call it analytical animation.

# Linear approaches 1:30

So let's introduce some of the basic analytic functions.

Let's formalize the animation situation and introduce some variables.

Let's say we want to animate an approach of some variable called `value` to another variable, called `target`.

We also have `delta_t` which is the time elapsed since `value` was computed.

The simplest type of approach is linear approach:

`value` -= `target`
`value` = Math.max(Math.abs(`value`) - `delta_t` * `velocity`, 0) * Math.sign(`value`)
`value` += `target`

- we introduce a new parameter `velocity`, which describes how fast `value` approaches `target`
- we only need to store the current `value` (8 bytes when it's stored as a double)
- the simplest kind of responsive animation
- works very well with colors, brightness, shadows
- can be used in other places - for example in Factorio to animate large numbers of bots

Ok, that was simple, so let's take a look at another one.

# Exponential approach 2:00

There is a very popular trick in animation which is based on the LERP function. At every tick we're moving the `value` to some point between `value` and `target`:

`value` = LERP(`value`, `target`, `alpha`), where `alpha` in (0, 1)

If we apply this function over some frames and draw the positions of this function, it becomes clear that we're dealing with an exponential curve:

<graph>

We can write this down as a formula:

value -= target
value *= Math.exp(`delta_t`/`decay_t`)
value += target

But we can actually rewrite this a bit to get an even simpler expression

`value` = (`value` - `target`) * Math.exp(`delta_t`/`decay_t`) + `target`

`value` += (`value` - `target`) * Math.exp(`delta_t`/`decay_t`) + `target` - `value`

`value` += (`value` - `target`) * Math.expm1(`delta_t`/`decay_t`)

- this formula is the Wilhelm Scream of animation
- once you learn it, you will see it everywhere

This is how it works (example) 

- we introduce a new parameter `decay_t`, which describes how quickly `value` approaches `target`
- same as in linear approach, we only need to store the `value` between frames
- arguably, it's even simpler than linear approach
- initial phase of the movement is extremely fast, the final approach slow so works well with things that appear "from some direction"

Now let's take a look at animation of periodic values.

# Animating periodic values 1:30 (16:00 total)

This is going to be very short one. Basically when animating a periodic value, we usually want our value to approach the target using the shortest way. Sometimes a large `value` will approach a small `target` by going up!

The key operation that we can do is to shift the `value` by the `period`. When we do that, visually nothing is changing, but numerically the `value` can be shifted up or down.

One way to achieve shortest approach is as follows:

while (`value` < `target` - `period`/2) `value` += `period`;
while (`value` > `target` + `period`/2) `value` -= `period`;

Two loops may seem scary until you realize that most of the time they actually don't execute at all.

If you don't like the loops, here is a C++ code that achieves the same without using loops:

value = std::remainder(value - target, range) + target;

I know this is C++ and all the other examples used JavaScript, but a JavaScript equivalent is going to be pretty messy so I'd recommend sticking to the double while loop approach.

Anyway we've covered the basics - linear approach, exponential approach, and animation of periodic values. Now let's try to improve our animations by introducing velocity.

# Velocity 1:00 (17:00 total)

One of the jarring issues with the animations that we've had so far is that the velocity of the object changes rather suddenly. Of course we can fix that but that will require us to introduce an extra variable - that's the velocity itself.

The basic idea is that at any point in time we know our `value`, our `target`, and the current `velocity`

The idea that we will use is that at every frame we will try to fit a smooth curve, that touches our `value` and is tangent to the `velocity`.

So for instance if our `value` is here and is running away from the `target`, we could fit a curve that looks like that. <sine approach> or one that looks like that: <springy approach>, or actually any type of curve that we can actually parametrize correctly.

# Sine approach 4:00 (21:00 total)

So let's try to create a curve that will approach our target value using the sine function:

value = amplitude * (Math.cos(t * 2 * pi / period) + 1) / 2 + target

We may substitude alpha for the longish argument:

alpha = t * 2 * pi / period

value = amplitude * (Math.cos(alpha) + 1) / 2 + target

There are actually two unknowns in this function - one is the `amplitude` - we need to now how stretched the cosine wave is - and the other one is `alpha` or `t`. The solution isn't obvious, requires derivatives but its result can actually be converted to relatively straightforward code:

First we try to find the horizontal argument of the function, `alpha`, and we can do that using this equation:

value -= target;

let alpha = Math.abs(velocity) < 0.0000001 ? 0 : -2 * atan2(velocity, value);

It may result in values outside of the range -pi, pi, so if necessary, we just add  2*pi

if (alpha <= -Math.PI) alpha += Math.PI * 2;
else if (alpha > Math.PI) alpha -= Math.PI * 2;

Also, it's possible that there are a couple solutions and we should resolve that. When we run away from the target, we could be either at the bottom of the cosine wave, or near its top. We typically prefer to be near the top of the wave, because otherwise the animation would accelerate away from the target. This works out mathematically, but it looks really weird. We can avoid this by clamping the `alpha` to -Math.PI/2.

alpha = Math.max(alpha, -Math.PI/2);

Alright, now that we have the horizontal argument `alpha`, finding `amplitude` can be done with:

let amplitude = Math.abs(alpha) < 0.0000001 ? value : -2 * velocity / sin(alpha);

Now we can shift the alpha a little:

alpha += delta_t * Math.PI * 2 / period;

We don't want to overshoot, so it's a good idea to clamp it to pi.

alpha = Math.min(alpha, Math.PI);

and recompute our `value` and `velocity`:

`value` = `amplitude` * (Math.cos(`alpha`) + 1) / 2 + `target`;
`velocity` = `amplitude` * -Math.sin(`alpha`) / 2;

The result looks like that: <example>

We get a pretty smooth approach, that is similar to the exponential approach, but has a smooth start.

This type of motion is good for animating objects that should have a "mass" - they accelerate and deaccelerate when approaching their target.

While this type of animation cannot be implemented as a one-liner - like the others. It's more physically grounded.

; ok, so we've learned Linear approach, Exponential approach, Periodic approach and Sine approach. There is one more - spring approach

# Spring approach 2:00 (23:00 total)

Let's try the same idea as before but with a slightly different formula:

value = target + amplitude * cos(t * 2 * Math.PI / period) * Math.pow(0.5, t / half_t);

This is very similar to the previous one, but notice that we have two different parameters now - we have P - which is the period of the oscilation, and we have `H`, which is its half-life.

There is also an equation for velocity which I'll skip. Solving this one is not easy, but we end up with:

float Q = 2 * M_PI / period_time;
float H = half_t;

value -= target;

let t;
let amplitude;
if (Math.abs(value) > 1e-6f) {
  t = -Math.atan((value * Math.LOG2E + v * H) / (value * H * Q)) / Q;
  amplitude = value / Math.pow(2, -t1 / H) / Math.cos(t1 * Q);
} else {
  t = period_time / 4;
  amplitude = -velocity * Math.pow(2, t1 / H) / Q;
}

t += delta_t;

x = target + amplitude * Math.cos(t2 * Q) * Math.pow(2, -t2 / H);
v =
    (-(amplitude * Math.LOG2E * Math.cos(t2 * Q)) / H - amplitude * Q * Math.sin(t2 * Q)) / Math.pow(2, t2 / H);

This is a wall of code, but the idea is similar as before - we first try to guess the time argument. Then we use that to find the amplitude. When we know `t1` and `amplitude` we can move them by `delta_t` and compute the new values.

The new animation behaves, well, like a spring. We could also obtain a similar behavior using physical simulation, but that would depend on the simulation tick-rate and would be more tricky to parametrize correctly. The new spring animation works with any display refresh rate.

- this kind of motion really has very little practical utility except achieving a specific stylistic effect. Wigglyness is rarely desired but if you want it, this is one way to do it.

; At this point we've covered all kinds of approach that I wanted to cover but I'll quickly mention one idea that I didn't implement but you might find useful

# Human eyes and fast moving objects 2:00 (25:00 total)

Our eyes have the ability to track moving objects. When you're on a train and you look out of the window at the fast moving objects, just near the train you may be able to quickly focus your sight on them before they disappear.

When a moving object is displayed on screen, it's actually displayed as a series of still images, which tricks our eyes. So while your eyes will try to track it accurately, the on-screen image will actually jump frame-to-frame, leading to blurry image.

The refresh rate required to avoid bluriness is prohibitively high. If you imagine a text that moves side to side on screen. If a text moves by 100 pixels over a second, then even if it's displayed at 100Hz, it's still going to be blurred by one pixel.

Any object that moves on-screen, unfortunately, has to be blurry, it's just the limitation of the technology that we're using to display video.

We can use this observation to improve our animations. Specifically, the middle part of animation, when the object is moving at a relatively high pace, has very little signal. We could use a different kind of animation curve that completely avoids it. This animation curve might look like that:

<image>

Animated object would basically accelerate towards target, reaching theoretically infinite speed (or teleporting near the target), and then deaccelerate when approaching the target.

I'm mentioning this as an idea only, because I didn't really had the time to come up with formulas for this kind of motion.

But it should be possible, so if you want really snappy animation, this kind of motion may we worth investigating.

Ok, now let's look at the common case in user interfaces, which is dragging objects around.

# Drag & drop 1:00 (26:00)

Let's start with the springy movement which often happens when we animate object position so that it moves under the cursor.

The way to avoid it is to separate the position of the object into two components:

screen_position = cursor_position + animated_delta

The position of the cursor is always taken directly from the operating system, we only animate the "remainder".

Here is an example where we animate object position to follow the cursor. <example>

And here is one where we only animate the delta value. <example>

But what do we do about velocity? Well - nothing. Doing anything with the velocity would cause the object to "disconnect" from the mouse, and the illusion of "holding the object" would disappear.

There is one exception to this way of animation - it's when we want to snap the object position.

# Responsive Snapping 1:00 (27:00)

When we move an object around the screen, quite often there are some valid positions wehre the object could be dropped.

Let's say we have a funciton `snap(pos)`, that returns the position where the object would be snapped to, if dropped.

If the object is dragged using mouse, but we also want to snap it to those positions, then we need to compare the position where the object would be snapped against the old snap position. When they're the same, we don't want to shift the object around, but when they've changed, we can add the mouse delta.

var oldSnap;

...

let newSnap = snap(pos);
if (newSnap != oldSnap) {
  pos += mouseDelta;
}
pos = AnimateTowards(newSnap);

This type of logic ensures that as long as the mouse performs small movements within drop area, the object will hold still, but once it moves outside, it will attach itself to the mouse.

Now let's talk about probably the most annoying part of user interface animation, which is what happens when we reparent widgets.

# Reparenting widgets 3:00 (30:00)

* TODO: first show a 2d example, then matrix-based

The best technique that I know for animating widgets across different places in the widget hierarych is to use matrices. Matrices can be computed hierarchically, so a parent widget can apply some transform to its child widgets.

Matrix is composed of six elements:

[scaleX, skewX, translateX]   [X]
[skewY, scaleY, translateY] x [Y] 
[0,          0,          1]   [1]

There is a kind of matrix that we call "total matrix", sometimes called CTM - it's the one that can take a coordinate within a widget and convert it into screen coordinate - in pixels.

Now when we want to take an object and reattach it to another place in the widget tree what we can do is that first we take its "total transform"

1. Find "total transform" at starting position
2. Reattach the object to another location within the widget tree
3. Find its new "total transform"
4. Apply extra transform that will shift the object into its old position
   Correction = inverse(T2) * T1
5. Smoothly fade away the new transform over the next frames

We can also transform the velocity from the starting widget, to the target widget, by basically multiplying original velocity by the correction matrix, except its last element - so without applying translation.

This approach properly takes care of scaling, rotation and translation of objects an can be used to create some pretty smooth animations.

<example from Automat>

Let's see some JavaScript. Unfortunately HTML provides very little in terms of computing matrices. The only API that I found was `getComputedStyle(elem).transform` along every element up to the root document. I think that combined with `offsetLeft` and `offsetTop`, this could be used to compute the element CTM.

But there is a simpler case that covers 90% of animation needs. If you don't care about scaling and rotation then you might get away with a simpler code, where the correction is just a two-dimensional translation. The general idea is the same as with matrices - but insted of matrices you use on-screen position. And it's something that we have in `getClientBoundsRect`.

This is the code that we could use to re-attach elements at different positions. And this is how it works out.

; Now I'd like to mention one more thing about energy efficiency.

# Energy efficiency 1:00 (31:00)

When you're implementing animations in user interface it's rather important not to blindly go for `requestAnimationFrame`. This will result in a constant power draw. The good news is that it's rater easy to avoid it.

You can just set a global variable `needsAnimationFrame` that you set to false at the start of every frame and at the end of the frame you check it before calling another `requestAnimationFrame`. Flipping this boolean to true during animation frame will ensure that at the end we'll request another frame. Once the animation stabilizes, the animation stops.

Here is how it could work:

```
var needsAnimationFrame;
var animating = false;

function Frame(t) {
  needsAnimationFrame = false;
  ...
  if (needsAnimationFrame) {
    requestAnimationFrame(Frame);
  } else {
    animating = false;
  }
}

function StartAnimation() {
  if (!animating) {
    requestAnimationFrame(Frame);
    animating = true;
  }
}
```

This is very simple and will ensure that whatever you're animating is not draining the battery pointlessly.

* TODO: maybe add a slide about caching widgets to textures & widget invalidations

; we're near the end so I'll drop two more tips

# Tearing is awesome 1:30 (32:30 total)

There is an implicit assumption that tearing is bad and we always need buffering, but it's actually not true. Tearing is only a problem when large objects are moving horizontally across the screen. This is the case in movies, because of camera pans, and in games, where the player often looks left to right. Whenever the whole background moves from left to right we see a horizontal cut going across the screen.

But hey, in user interfaces we rarely do that. And even when we do, the tear is rarely visible. So if you only can, try to enable tearing. This reduces your display latency by a one whole frame which is just incredible when it comes to responsiveness. It is very noticeable.

In my opinion tearing is great and you almost always want to have the extra latency. The only exception are movies and some types of games.

Sad news is that browsers don't let websites control screen tearing - sometimes it's possible to do this be passing specific flags when starting a browser, but it's not something that I'd advise to users. So the sad news is that HTML lacks support for tearing. Only relevant to native apps.

# Sound is awesome 1:00 (33:30)

One last tip is that when it comes to end to end latency of delivering information from code to human consciousness, sound is actually processed by human brain slightly faster than images. So if there is some feedback that you want to send, playing a short sound sample may actually have a better latency.

The overall latency depends a lot on the operating system APIs that are being used but if the application uses the right one, on Windows (using WASAPI) and Linux (using PipeWire) the default latency is 10ms. And there are ways to bring this down to 2.6ms if you really want to push it.

At this latency it actually makes a difference whether the user has a headphones or holds the phone in their hands because every 30cm of distance from speakers adds another millisecond of latency.

Anyway, regardless of that, if you really want to quickly notify the user about some UI event, sound is probably your best option.

# The end 0:30 (34:00 total)

And this condludes my presentation. Thank you! 

If you don't have question but know any cool tricks for animating user interfaces, please use the mic to share them. I guess those tricks are so small that they rarely get shared.
