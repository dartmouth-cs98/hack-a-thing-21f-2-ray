# Hack Technology / Project Attempted

A WebVR experience. Some random objects, an orb that grows when you hover over it, the mountains which I grew up visiting, and a picture!

## What you built? 

I attempted to use the [AFrame framework](https://aframe.io/) to build a 3d Web experience, usable on both VR headsets, mobile, and desktop.

https://user-images.githubusercontent.com/75859468/135273573-853abe45-18f3-43a0-a00e-24ec18fba149.mov

## Who Did What?

(One-person project)

## What you learned

AFrame is super easy to start using, yet also extremely customizable! While finding the right config is challenging, given more time, I'm confident it could be used in a CS98 project.

I learned about various 3d modelling file formats -- there are many! Trying to get a 3d model of mountain topography was actually very challenging; I used [TouchFrame](https://touchterrain.geol.iastate.edu/) to get a .stl model (intended for 3d modelling) and used an online converter to turn it into a .gltf, which is a format intended to be fast and effficient for the web.

In fact, getting the model of the mountains in the right format and visible in AFrame was one of the most challenging part, but if you're going to use AFrame, you'll need to use 3d models outside of AFrame's primitive library.

Using others' libraries/resources can help you accelerate a project, or lead you into a time quicksand pit. For this project, I had several misstarts:
1. I tried [Aframe-React](https://github.com/supermedium/aframe-react), a node module for React-AFrame integration. The authors warn that the module isn't efficient for most cases, but I wanted to try out. Several hours later, I realized that the module was no longer supported, which meant it was using an outdated form of AFrame that couldn't handle GLTF models.
  * Thus, my project has a React framework for non AFrame components, but the VR element must be done using static html tags. I kept the React because I could imagine a project where you only partially used VR, but there is definetly a need for static templating.
3. AFrame has several open-source projects, like [aframe-extras](https://github.com/n5ro/aframe-extras/tree/master/src/primitives), which has pre-built entitites including an ocean. I couldn't get it to work; I believe due to slight outdated-ness of the code.
4. Another open-source project which I tried and failed to implement was [AudioAnalyser](https://github.com/supermedium/superframe/tree/master/components/audioanalyser) which is supposed to let you manipulate objects based on sound level. I beliieve that with enough time I could implement this, but after a while debugging, I decided to walk away for this project.

In a future project, I would love to work on implementing Aframe-Extras and AudioAnalyser.

## CS98 Relationship

Any group thinking about using VR should seriously consider this framework, as opposed to Unity. AFrame is relatively much more lightweight, easy to implement on many devices, and still has opportunities for awesome features. If I work on a project which could use VR (for example, I could imagine my pitched project, MetaQuilt, using AFrame), I will suggest AFrame. 

## Authors
Ray Crist '22

## Acknowledgments

[Video Texture needed component](https://github.com/aframevr/aframe/blob/master/examples/js/play-on-click.js)
[AFrame Basic Scene tutorial](https://aframe.io/docs/1.2.0/guides/building-a-basic-scene.html)

