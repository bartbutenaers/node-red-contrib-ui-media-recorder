# node-red-contrib-ui-media-recorder
A Node-RED node to record media (audio/video) via the Node-RED dashboard.

Special thanks to Simon Hailes, the audio and video wizard from yellaUmbrella (www.yellaumbrella.tv) for all his great tips and tricks!

## Install
Run the following npm command in your Node-RED user directory (typically ~/.node-red):
```
npm install bartbutenaers/node-red-contrib-ui-media-recorder
```

## Node configuration
The following settings can be specified in the node's config screen:

### Media type
Currently only video (from the device's webcam) is supported.  In the future audio (from the device's microphone) will be added...

### Allow video playback in the dashboard
+ When activated the recorded video can be displayed in the dashboard (but it can also become hidden when required).  See further how the video can be shown or hidden via input messages.
+ When deactivated the recorded video cannot be displayed in the dashboard, which means this widget will be completely invisible.  This means that the widget won't use any space in the dashboard.

## Display video in the dashboard at startup
+ When activated the recorded video will be displayed by default when the dashboard is started.  
+ When deactivated the recorded video will not be displayed by default in the dashboard (which means the camera icon will be displayed by default).  

Note: This option will be disabled when no video playback is allowed (see previous setting).

## Client side trigger
All actions need to be triggered by the Node-RED dashboard.  Indeed for ***privacy*** reasons, it is not allowed that the Node-RED flow triggers image capturing on a device!

This means that the trigger will start in the Node-RED dashboard (e.g. a user pressing a button), and will via a round-trip on the Node-RED flow trigger again a client-side action:

![Round trib](https://user-images.githubusercontent.com/14224149/70838482-c0b6d280-1e08-11ea-8e0a-612fb9b23e97.png)

1. The camera images can be displayed live in the dashboard (directly from the webcam so no network traffic involved).
2. The User presses a button to trigger the selfie. But you can choose any other widget you like to trigger it ...
3. The server side button component receives the click event. It will send an output message containing the **socketid** of the client where the button has been clicked!
4. The msg.payload="take_snapshot" will be set to let this node know what it has to do
5. This node sends a command to the client side to get a snapshot. That command will only be send to the dashboard where the button has been clicked (based on that socketid)!!!
6. The client side of this node gets a snapshot and returns it to the server side of this node.
7. An output message will be send by this node, containing the snapshot image inside the ```msg.payload```.

CAUTION: the button that triggers the control message, needs to be on the **SAME Dashboard tabsheet** as the Media-Recorder node!  Otherwise it won't work ...

## Message based node control
This node can be controlled via input messages, where the ```msg.payload``` will contain the action that needs to be executed.

### Hide/show the video
This node can show the video captured from the webcam directly (i.e. without round trip to the Node-RED flow).  However in some circumstances, users might want to to turn off the video being played on their device.  For example to avoid too much battery consumption on a mobile device.

The following flow allows the client to turn on the video playback (```msg.payload="display_video"```) or turn it off (```msg.payload="hide_video"```):

![Flow show/hide](https://user-images.githubusercontent.com/14224149/70835610-e1c5f600-1dfd-11ea-99f9-1a0e2fc165f7.png)

```
[{"id":"ed68d81d.4c0168","type":"ui_button","z":"30fb1577.8f556a","name":"Hide video","group":"e5e4ba3f.5290e8","order":3,"width":0,"height":0,"passthru":false,"label":"Hide video","tooltip":"","color":"","bgcolor":"","icon":"fa-eye-slash","payload":"hide_video","payloadType":"str","topic":"","x":790,"y":740,"wires":[["ac0b3eb4.d8a4b"]]},{"id":"1b21ca75.32f0d6","type":"ui_button","z":"30fb1577.8f556a","name":"Show video","group":"e5e4ba3f.5290e8","order":4,"width":"0","height":"0","passthru":false,"label":"Display video","tooltip":"","color":"","bgcolor":"","icon":"fa-eye ","payload":"display_video","payloadType":"str","topic":"","x":790,"y":700,"wires":[["ac0b3eb4.d8a4b"]]},{"id":"ac0b3eb4.d8a4b","type":"ui_media_recorder","z":"30fb1577.8f556a","group":"e5e4ba3f.5290e8","name":"","order":1,"width":0,"height":0,"mediaType":"video","allowVideoDisplay":true,"startupVideoDisplay":false,"x":1000,"y":700,"wires":[[]]},{"id":"e5e4ba3f.5290e8","type":"ui_group","z":"","name":"Recorder demo","tab":"4c302198.634e8","disp":true,"width":"6","collapse":false},{"id":"4c302198.634e8","type":"ui_tab","z":"","name":"Media test","icon":"fa-video-camera","disabled":false,"hidden":false}]
```
The result will look like this:

![media_recorder_hide](https://user-images.githubusercontent.com/14224149/70836092-6c5b2500-1dff-11ea-9bb7-037de30e8ac2.gif)

### Take a snapshot image
This node can capture a single snapshot image (i.e. a selfie) in multiple situations:
+ When the video is playing
+ When the video is hidden (i.e. the camera icon)
+ When the widget is invisible (i.e. no video allowed in config screen)

The following flow requires the node-red-contrib-image-output node to be installed, to be able to show a snapshot preview image inside the Node-RED flow.  The image is captured by sending ```msg.payload="take_picture"```:

![media_recorder_snapshot](https://user-images.githubusercontent.com/14224149/70836476-89442800-1e00-11ea-9b59-8795aec33d94.gif)

```
[{"id":"ff652bc.57e06d8","type":"ui_button","z":"30fb1577.8f556a","name":"Snapshot image","group":"e5e4ba3f.5290e8","order":2,"width":0,"height":0,"passthru":false,"label":"Snapshot image","tooltip":"","color":"","bgcolor":"","icon":"fa-camera","payload":"take_picture","payloadType":"str","topic":"","x":900,"y":600,"wires":[["2e93d661.d7f4ca"]]},{"id":"2e93d661.d7f4ca","type":"ui_media_recorder","z":"30fb1577.8f556a","group":"e5e4ba3f.5290e8","name":"","order":1,"width":0,"height":0,"mediaType":"video","allowVideoDisplay":true,"startupVideoDisplay":false,"x":1120,"y":600,"wires":[["8c53195a.e0c758"]]},{"id":"8c53195a.e0c758","type":"image","z":"30fb1577.8f556a","name":"","width":160,"x":1340,"y":600,"wires":[]},{"id":"f46b471c.7ea4e8","type":"ui_button","z":"30fb1577.8f556a","name":"Show video","group":"e5e4ba3f.5290e8","order":4,"width":"0","height":"0","passthru":false,"label":"Display video","tooltip":"","color":"","bgcolor":"","icon":"fa-eye ","payload":"display_video","payloadType":"str","topic":"","x":910,"y":660,"wires":[["2e93d661.d7f4ca"]]},{"id":"e5e4ba3f.5290e8","type":"ui_group","z":"","name":"Recorder demo","tab":"4c302198.634e8","disp":true,"width":"6","collapse":false},{"id":"4c302198.634e8","type":"ui_tab","z":"","name":"Media test","icon":"fa-video-camera","disabled":false,"hidden":false}]
```

### Periodic timer
This node can send snapshot images periodically at a fixed time interval.

The following flow requires the node-red-contrib-msg-speed node to be installed, to be able to show count the messages per second to be send to the Node-RED flow.  In this example the ```msg.interval=1000``` which means 1 second (or 1000 milliseconds) between successive snapshot images:

![media_recorder_timer](https://user-images.githubusercontent.com/14224149/70837864-da0a4f80-1e05-11ea-8043-01ad85fd57b8.gif)

```
[{"id":"4ad71b60.2c3a94","type":"msg-speed","z":"30fb1577.8f556a","name":"","frequency":"sec","estimation":false,"ignore":false,"x":1490,"y":520,"wires":[[],[]]},{"id":"44f82c44.a03514","type":"ui_button","z":"30fb1577.8f556a","name":"Start timer","group":"e5e4ba3f.5290e8","order":5,"width":0,"height":0,"passthru":false,"label":"Start timer","tooltip":"","color":"","bgcolor":"","icon":"fa-clock-o","payload":"start_timer","payloadType":"str","topic":"","x":890,"y":520,"wires":[["6c916306.eea74c"]]},{"id":"6c916306.eea74c","type":"change","z":"30fb1577.8f556a","name":"","rules":[{"t":"set","p":"interval","pt":"msg","to":"1000","tot":"num"}],"action":"","property":"","from":"","to":"","reg":false,"x":1080,"y":520,"wires":[["9071ae75.9055b"]]},{"id":"9071ae75.9055b","type":"ui_media_recorder","z":"30fb1577.8f556a","group":"e5e4ba3f.5290e8","name":"","order":1,"width":0,"height":"-1","mediaType":"video","allowVideoDisplay":false,"startupVideoDisplay":false,"x":1280,"y":520,"wires":[["4ad71b60.2c3a94","58a1f954.599888","ced9fa9b.8f52b8"]]},{"id":"3744429a.72087e","type":"ui_button","z":"30fb1577.8f556a","name":"Stop recording","group":"e5e4ba3f.5290e8","order":7,"width":0,"height":0,"passthru":false,"label":"Stop streaming/timer","tooltip":"","color":"","bgcolor":"","icon":"fa-hand-paper-o","payload":"stop","payloadType":"str","topic":"","x":880,"y":580,"wires":[["6c916306.eea74c"]]},{"id":"58a1f954.599888","type":"debug","z":"30fb1577.8f556a","name":"","active":true,"tosidebar":true,"console":false,"tostatus":true,"complete":"timeout","targetType":"msg","x":1490,"y":580,"wires":[]},{"id":"ced9fa9b.8f52b8","type":"debug","z":"30fb1577.8f556a","name":"","active":true,"tosidebar":true,"console":false,"tostatus":true,"complete":"duration","targetType":"msg","x":1490,"y":640,"wires":[]},{"id":"e5e4ba3f.5290e8","type":"ui_group","z":"","name":"Recorder demo","tab":"4c302198.634e8","disp":true,"width":"6","collapse":false},{"id":"4c302198.634e8","type":"ui_tab","z":"","name":"Media test","icon":"fa-video-camera","disabled":false,"hidden":false}]
```

CAUTION: when the specified interval is set too small, the browser will be so busy that it can't handle any user input.  In that case the user interface becomes *unresponsive*, which means it hangs ...

To be able to troubleshoot whether the specified interval might be too narrow, some extra fields are available in the output message:
+ ```msg.duration```: the number of milliseconds how long it takes to process the snapshot image capture.
+ ```msg.timeout```: the time left before the next snapshot image will be captured.  When this value becomes too small (or even negative), the user interface won't be able to do other things except image processing ...

### Streaming
This node allows images to be captured at full speed, which means as fast as the browser can handle. 

![streaming](https://user-images.githubusercontent.com/14224149/70838296-da0b4f00-1e07-11ea-8081-dc4bd502832a.png)

```
[{"id":"71c12d4c.f89734","type":"ui_button","z":"30fb1577.8f556a","name":"Start streaming","group":"57e9c442.c2250c","order":6,"width":0,"height":0,"passthru":false,"label":"Start streaming","tooltip":"","color":"","bgcolor":"","icon":"fa-video-camera","payload":"start_streaming","payloadType":"str","topic":"","x":860,"y":540,"wires":[["ab3804fc.84fd98"]]},{"id":"a4e159db.af4b58","type":"ui_button","z":"30fb1577.8f556a","name":"Stop recording","group":"57e9c442.c2250c","order":7,"width":0,"height":0,"passthru":false,"label":"Stop streaming/timer","tooltip":"","color":"","bgcolor":"","icon":"fa-hand-paper-o","payload":"stop","payloadType":"str","topic":"","x":860,"y":580,"wires":[["ab3804fc.84fd98"]]},{"id":"ab3804fc.84fd98","type":"ui_media_recorder","z":"30fb1577.8f556a","group":"57e9c442.c2250c","name":"","order":1,"width":0,"height":0,"mediaType":"video","allowVideoDisplay":true,"startupVideoDisplay":false,"x":1080,"y":540,"wires":[[]]},{"id":"57e9c442.c2250c","type":"ui_group","z":"","name":"Hikvision","tab":"9e64fa22.18b428","disp":true,"width":"6","collapse":false},{"id":"9e64fa22.18b428","type":"ui_tab","z":"","name":"Camera","icon":"dashboard","disabled":false,"hidden":false}]
```

CAUTION: This will result in a very high load for all components (dashboard, flow, bandwith...), so only use it in very specific use cases.  Also take into account that this will consume a lot of bandwith, which might be a big problem for mobile devices!
