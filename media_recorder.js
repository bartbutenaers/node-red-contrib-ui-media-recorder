/**
 * Copyright 2018 Bart Butenaers
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
module.exports = function(RED) {
    function checkConfig(node, conf) {
        if (!conf || !conf.hasOwnProperty("group")) {
            node.error(RED._("ui_list.error.no-group"));
            return false;
        }
        return true;
    }

    function HTML(config) {
        // The configuration is a Javascript object, which needs to be converted to a JSON string
        var configAsJson = JSON.stringify(config);

        return String.raw`
            <div id='div_cam_recorder_` + config.id + `' style='width:100%; height:100%;' ng-init='init(` + configAsJson + `)'>
                <svg id='svg_cam_recorder_` + config.id + `' xml:space="preserve" viewBox="0 0 100 100" y="0" x="0" xmlns="http://www.w3.org/2000/svg" version="1.1" width="800px" height="800px" xmlns:xlink="http://www.w3.org/1999/xlink" style="width:100%;height:100%;background-size:initial;background-repeat-y:initial;background-repeat-x:initial;background-position-y:initial;background-position-x:initial;background-origin:initial;background-image:initial;background-color:rgb(255, 255, 255);background-clip:initial;background-attachment:initial;animation-play-state:paused" ><g class="ldl-scale" style="transform-origin:50% 50%;transform:scale(0.8);animation-play-state:paused" ><path fill="#d1d1d1" d="M92.47 40.945l-.02-.129a3.403 3.403 0 0 0-.095-.434 3.727 3.727 0 0 0-.124-.36c-.006-.013-.009-.027-.015-.041a3.496 3.496 0 0 0-.185-.373c-.007-.012-.011-.025-.018-.036.007-.012.011-.025.018-.037.068-.12.13-.244.185-.372.007-.015.011-.031.017-.046a3.516 3.516 0 0 0 .217-.789c.007-.043.015-.086.02-.129a3.53 3.53 0 0 0 .029-.439v-2.891c0-.256-.012-.51-.03-.762l-.009-.133a11.256 11.256 0 0 0-.257-1.603 12.308 12.308 0 0 0-.193-.696c-.012-.038-.023-.076-.036-.113a11.058 11.058 0 0 0-.587-1.45l-.024-.046a11.654 11.654 0 0 0-.331-.613l-.054-.095c-.12-.202-.247-.399-.379-.593l-.079-.113a10.662 10.662 0 0 0-.426-.569l-.048-.057a12.212 12.212 0 0 0-.447-.515l-.068-.074c-.16-.171-.327-.335-.498-.495l-.104-.097a11.15 11.15 0 0 0-.535-.459l-.077-.059a10.23 10.23 0 0 0-.542-.4l-.076-.054a11.267 11.267 0 0 0-.597-.376l-.128-.074a10.88 10.88 0 0 0-.623-.33l-.105-.049a11.27 11.27 0 0 0-.626-.273l-.054-.023 3.651-3.651c.13-.13.253-.267.369-.408.026-.032.048-.066.072-.098.087-.112.174-.225.25-.342.016-.024.029-.049.044-.074a5 5 0 0 0 .232-.393l.014-.03a5.369 5.369 0 0 0 .583-1.98l.003-.048a5.72 5.72 0 0 0 .023-.474c0-.173-.009-.344-.025-.514l-.001-.008a5.376 5.376 0 0 0-.587-1.988l-.01-.022a5.374 5.374 0 0 0-.236-.4c-.014-.022-.025-.045-.039-.066a5.326 5.326 0 0 0-.255-.347c-.024-.03-.044-.062-.069-.092a5.245 5.245 0 0 0-.369-.408l-2.56-2.559a5.396 5.396 0 0 0-3.848-1.593 5.398 5.398 0 0 0-3.845 1.59L66.39 23.421l-1.054-2.642c-1.206-3.023-4.571-5.303-7.827-5.303H42.492c-3.255 0-6.619 2.279-7.827 5.302l-.567 1.422a5.774 5.774 0 0 0-3.852-1.468h-7.068a5.805 5.805 0 0 0-5.218 3.27c-5.805.219-10.46 5.01-10.46 10.867v2.892c0 .149.012.295.029.44.005.043.013.086.02.128.016.104.037.207.062.309.011.042.02.084.032.126.036.124.076.245.125.362l.013.037c.054.129.117.253.186.374l.018.036-.018.036a3.828 3.828 0 0 0-.186.374l-.013.037a3.77 3.77 0 0 0-.125.362c-.012.042-.022.084-.032.126a3.447 3.447 0 0 0-.062.309l-.02.128a3.766 3.766 0 0 0-.029.44V70.39c0 3.15 1.356 6.113 3.733 8.187l-.005.005-.326.326a5.401 5.401 0 0 0-1.591 3.844 5.4 5.4 0 0 0 1.59 3.844l2.563 2.563a5.403 5.403 0 0 0 3.845 1.591 5.404 5.404 0 0 0 3.845-1.59l8.957-8.958.041.038c.058.056.117.11.178.161l.071.06c.077.062.157.122.239.177l.017.012a3.214 3.214 0 0 0 .354.205c.069.036.139.069.21.1.03.013.059.027.09.038.094.038.188.073.285.103l.015.005c.101.031.205.056.309.079.031.007.062.012.094.018a3.654 3.654 0 0 0 .661.063h48.95c5.996 0 10.874-4.878 10.874-10.874V41.384a3.349 3.349 0 0 0-.029-.439z" style="fill:rgb(209, 209, 209);animation-play-state:paused" ></path>
                <path fill="#464646" d="M41.146 64.225L18.592 86.779c-.353.353-.817.528-1.282.528s-.929-.176-1.282-.528l-2.563-2.563a1.817 1.817 0 0 1 0-2.563l3.909-3.909 14.609-14.609 5.381-5.381 16.611-16.611 5.261-5.26h-.001l8.082-8.082h.001l14.213-14.213a1.809 1.809 0 0 1 1.281-.528c.464 0 .929.176 1.281.528l2.563 2.563a1.817 1.817 0 0 1 0 2.563L77.571 27.8l-2.961 2.961-14.162 14.162-19.302 19.302zm8.053-23.433c-6.414.658-11.527 5.771-12.185 12.185l12.185-12.185zm1.405 27.251c7.532 0 13.661-6.128 13.661-13.661 0-2.351-.597-4.567-1.65-6.501L44.101 66.394a13.59 13.59 0 0 0 6.503 1.649zm-36.799 8.144l16.799-16.799a20.37 20.37 0 0 1-.653-5.128c0-4.796 1.667-9.207 4.445-12.694H11.124v29.005a7.245 7.245 0 0 0 2.681 5.616zm55.126-34.621l-1.511 1.51a20.265 20.265 0 0 1 3.354 11.184c0 11.255-9.157 20.412-20.412 20.412a20.288 20.288 0 0 1-11.186-3.351l-6.5 6.5h48.95c3.987 0 7.249-3.262 7.249-7.249V41.566H68.931zM82.62 27.877L72.555 37.941h16.319v-2.892c.001-3.649-2.734-6.683-6.254-7.172zm-32.258 5.972c1.77 0 3.487.229 5.126.655l8.113-8.112-1.632-4.088c-.663-1.662-2.67-3.022-4.461-3.022H42.492c-1.79 0-3.797 1.36-4.46 3.022l-1.784 4.469c-.144.361-.21.706-.211 1.028H32.42v-1.087a2.182 2.182 0 0 0-2.175-2.175h-7.068a2.182 2.182 0 0 0-2.175 2.175V27.8h-2.628c-3.987 0-7.249 3.262-7.249 7.249v2.892h26.993a20.296 20.296 0 0 1 12.244-4.092z" style="fill:rgb(70, 70, 70);animation-play-state:paused" ></path>
                <path fill="#464646" d="M13.466 81.652l3.909-3.909 14.609-14.609 5.381-5.382 16.611-16.611 5.261-5.26h-.001l8.082-8.082h.001l14.213-14.213a1.809 1.809 0 0 1 1.281-.528c.464 0 .929.176 1.281.528l2.563 2.563a1.817 1.817 0 0 1 0 2.563l-9.086 9.087-2.961 2.961-14.162 14.163-19.302 19.302-22.554 22.554a1.805 1.805 0 0 1-1.282.528 1.81 1.81 0 0 1-1.282-.528" style="fill:rgb(70, 70, 70);animation-play-state:paused" ></path>
                <path fill="#464646" d="M49.199 40.792c-6.414.658-11.527 5.771-12.185 12.185l12.185-12.185z" style="fill:rgb(70, 70, 70);animation-play-state:paused" ></path>
                <path fill="#464646" d="M50.604 68.043c7.532 0 13.661-6.128 13.661-13.661 0-2.351-.597-4.567-1.65-6.501L44.101 66.394a13.59 13.59 0 0 0 6.503 1.649z" style="fill:rgb(70, 70, 70);animation-play-state:paused" ></path>
                <path fill="#464646" d="M13.805 76.187l16.799-16.799a20.37 20.37 0 0 1-.653-5.128c0-4.796 1.667-9.207 4.445-12.694H11.124" style="fill:rgb(70, 70, 70);animation-play-state:paused" ></path>
                <path fill="#464646" d="M68.931 41.566l-1.511 1.51a20.265 20.265 0 0 1 3.354 11.184c0 11.255-9.157 20.412-20.412 20.412a20.288 20.288 0 0 1-11.186-3.351l-6.5 6.5h48.95c3.987 0 7.249-3.262 7.249-7.249V41.566H68.931z" style="fill:rgb(70, 70, 70);animation-play-state:paused" ></path>
                <path fill="#464646" d="M82.62 27.877L72.555 37.941h16.319v-2.892c.001-3.649-2.734-6.683-6.254-7.172z" style="fill:rgb(70, 70, 70);animation-play-state:paused" ></path>
                <path fill="#464646" d="M11.124 37.941h26.993a20.3 20.3 0 0 1 12.245-4.092c1.77 0 3.487.229 5.126.655l8.113-8.112-1.632-4.088c-.663-1.662-2.67-3.022-4.461-3.022H42.492c-1.79 0-3.797 1.36-4.46 3.022l-1.784 4.469c-.144.361-.21.706-.211 1.028H32.42v-1.087a2.182 2.182 0 0 0-2.175-2.175h-7.068a2.182 2.182 0 0 0-2.175 2.175V27.8h-2.628c-3.987 0-7.249 3.262-7.249 7.249" style="fill:rgb(70, 70, 70);animation-play-state:paused" ></path>
                <metadata xmlns:d="https://loading.io/stock/" style="animation-play-state:paused" ><d:name style="animation-play-state:paused" >no camera</d:name>
                <d:tags style="animation-play-state:paused" >flashlight,photo,dslr,no camera,map</d:tags>
                <d:license style="animation-play-state:paused" >free</d:license>
                <d:slug style="animation-play-state:paused" >y69ljw</d:slug></metadata></g><!-- generated by https://loading.io/ --></svg>
            </div>`;
    };
        
    var ui = undefined;
    function UiMediaRecorderNode(config) {
        try {
            var node = this;
            if(ui === undefined) {
                ui = RED.require("node-red-dashboard")(RED);
            }
            RED.nodes.createNode(this, config);
            var done = null;
            
            if (checkConfig(node, config)) {
                var html = HTML(config);
                done = ui.addWidget({
                    node: node,
                    width: config.width,
                    height: config.height,
                    order: config.order,
                    format: html,
                    templateScope: "local",
                    group: config.group,
                    emitOnlyNewValues: false,
                    forwardInputMessages: false,
                    storeFrontEndInputAsState: false,
                    convertBack: function (value) {
                        return value;
                    },
                    beforeEmit: function(msg, value) {
                        // When the message doesn't need to be send to all clients, then a client needs to be specified (via it's socket id).
                        if (!msg.socketid) { 
                            // We expect a socket id to send the message to one specific client.  However since there is no socket id, we
                            // will send the message to all clients (and skip the message inside the clients).  Since a message cannot be
                            // stopped at this point ...
                            msg.payload = "ignore"; 
                            console.log("When no sending to all clients, the input message should contain a 'socketid' field");
                        }
                        
                        return { msg: msg };
                    },
                    beforeSend: function (msg, orig) {
                        if (orig) {
                            return orig.msg;
                        }
                    },
                    initController: function($scope, events) {
                        // Capture a photo by fetching the current contents of the video
                        // and drawing it into a canvas, then converting that to a PNG
                        // format data URL. By drawing it on an offscreen canvas and then
                        // drawing that to the screen, we can change its size and/or apply
                        // other changes before drawing it.
                        function takeSnapshot() {
                            var before = Date.now();
                            
                            $scope.canvasElement.width = $scope.videoElement.videoWidth;
                            $scope.canvasElement.height = $scope.videoElement.videoHeight;
                            
                            var canvasContext = $scope.canvasElement.getContext('2d');
                    
                            // Draw the entire current video frame in the canvas
                            canvasContext.drawImage($scope.videoElement, 0, 0, $scope.videoElement.videoWidth, $scope.videoElement.videoHeight);
                        
                            // Get the image data from the canvas.
                            // Remark: the PNG format is the only image format that is supported by all HTML5-compliant web browsers
                            var dataURL = $scope.canvasElement.toDataURL('image/png');
                            
                            // The data URL starts with "data:image/png;base64," followed by the data.  Let's remove that first part ...
                            var imageBase64 = dataURL.replace(/^data:image\/\w+;base64,/, "");
                            
                            var message = {
                                payload: imageBase64
                            }
               
                            switch ($scope.recorderStatus) {
                                case "timer":
                                    // The timer interval (i.e. the interval between successive images) has been specified in the interval.
                                    // But the above calculations (in this function) have already used a part of that time interval, so we
                                    // will calculate the remaining time.  At that time the next snapshot should be scheduled.
                                    var duration = Date.now() - before;
                                    var timeout = $scope.timerInterval - duration;
                                    
                                    // Pass the duration in the message, so the Node-RED flow could detect whether the specified interval
                                    // (in the config screen) is too short --> because in that case 
                                    message.duration = duration;
                                    message.timeout = timeout;
                                    
                                    // When the timeout is negative, this means that the above calculation (in this function), has taken longer
                                    // as expected.  The timer interval that has been specified in the input message was too short, so we can't/refresh-ui-node/13921/40
                                    // deliver the images at that speed.  So the best we can do is start the next capture immediately (i.e. at 0 seconds):
                                    timeout = Math.max(0, timeout);

                                    // Schedule the next snapshot in time.  Note that we could have used setInterval (instead of recursive setTimeout calls).  However 
                                    // when the above processing (in this function) takes longer than the interval, a queue of callbacks will remain. 
                                    // Thanks to Simon Hailes for the tip!!!
                                    $scope.timerId = setTimeout(takeSnapshot, timeout);
                                    
                                    break;
                                case "streaming":
                                    $scope.rafId = requestAnimationFrame(takeSnapshot);
                                    break;
                            }
                                                        
                            // Send the image data (as base64 encoded string) to the Node-RED server side flow
                            $scope.send(message);
                        }
                        
                        $scope.init = function (config) {          
                            $scope.config = config;
                            $scope.recorderStatus = null;
                  
                            // TODO make these adjustable
                            $scope.config.allowVideoDisplay   = config.allowVideoDisplay;
                            $scope.config.startupVideoDisplay = config.startupVideoDisplay;
                            $scope.config.mediaType           = config.mediaType;
                            $scope.isVideoPlaying      = false;
                            $scope.config.isVideoDisplayed    = false;
                            $scope.config.width_min           = 640;
                            $scope.config.width_max           = 640;
                            $scope.config.width_ideal         = 640;
                            $scope.config.width_exact         = 640;
                            $scope.config.height_min          = 480;
                            $scope.config.height_max          = 480;
                            $scope.config.height_ideal        = 480;
                            $scope.config.height_exact        = 480;
                            //$scope.config.facingMode   = 'user';
                            //$scope.config.mode         = 'realtime'; // or 'timer' or 'snapshot'
                            
                            // Ignore all input messages that arrive within 1 second after creation of this widget.
                            // This way we can avoid the last old message being resend from server to the client...
                            // See https://discourse.nodered.org/t/refresh-ui-node/13921/40
                            $scope.acceptMessages = false;
                            setTimeout(function() { 
                                $scope.acceptMessages = true; 
                            } , 1000);
                            
                            $scope.divElement = document.getElementById("div_cam_recorder_" + config.id);
                            $scope.svgElement = document.getElementById("svg_cam_recorder_" + config.id);
                            
                            $scope.videoElement = document.createElement('video');
                            $scope.videoElement.style.width='100%';
                            $scope.videoElement.style.height='100%'; 
             
                            // Canvas will be used to clone the image frames to.  This canvas is invisible, since it won't be added to the DOM
                            $scope.canvasElement = document.createElement('canvas');
                        
                            if (!window.MediaSource && !window.WebKitMediaSource) {
                                $scope.errorText = "Your browser doesn't support the MediaSource API!";
                                // TODO show this error in the node status (flow editor)
                                console.log($scope.errorText);
                                return;
                            }
                                        
                            // Try to have support for getUserMedia on as much platforms as possible
                            if (!navigator.getUserMedia) {
                                navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

                                if (!navigator.getUserMedia && navigator.mediaDevices) {
                                    navigator.getUserMedia = navigator.mediaDevices.getUserMedia;
                                }
                            }
                            
                            // Caution: for example since version 74 of Chrome navigator.getUserMedia, navigator.webkitGetUserMedia and navigator.mediaDevices
                            // can be used only in secure context (https).  Otherwise they are undefined!
                            if (!navigator.getUserMedia) {
                                $scope.errorText = "Your browser doesn't support getUserMedia!";
                                console.log($scope.errorText);
                                return;
                            }
                            
                            // TODO : Configure the user media based on the settings on the config screen.
                            // If the video device can’t deliver the requested resolution, the browser will return other resolutions available. 
                            // To ensure that the browser returns a resolution not lower than the one provided we have to make use of the `min` property. 
                            // If this minimum requirement can’t be met, the promise will be rejected with an `OverconstrainedError`. --> TODO dit controleren
                            // Sometimes, you’re concerned about data saving and you need the stream to not exceed a set resolution. 
                            // To enable this functionality, update the constraints object to contain a `max` field.
                            // The `ideal` setting is typically used alongside the `min` and `max` properties to find the best possible setting, that is closest 
                            // to the ideal values provided.  Instead of ideal you can also specify 'exact' ...
                            // To tell the browser to make use of the front or back (on mobile) camera on devices, you can specify a `facingMode` property.
                            // To make use of the back camera on mobile devices, we can alter the `facingMode` property to `environment`.
                            var userMediaConfig = {};
                            
                            if ($scope.config.mediaType === "video" || $scope.config.mediaType === "both") {
                                userMediaConfig.video = {
                                    width: { 
                                        min: $scope.config.width_min,
                                        ideal: $scope.config.width_ideal,
                                        max: $scope.config.width_max,
                                    },
                                    height: {
                                        min: $scope.config.height_min,
                                        ideal: $scope.config.height_ideal,
                                        max: $scope.config.height_max
                                    },
                                    facingMode: $scope.config.facingMode
                                }
                            }
                            else {
                                userMediaConfig.video = false;
                            }
                            
                            if ($scope.config.mediaType === "audio" || $scope.config.mediaType === "both") {
                                userMediaConfig.audio = {
                                    // Currently audio is not supported yet !!!!
                                }
                            }
                            else {
                                userMediaConfig.audio = false;
                            }
                            
                            // Start capturing by getting access to the webcam (e.g. Chrome will display a popup here ...)
                            // TODO controleren of we niet alles blokkeren als de gebruiker niet op de popup klikt !!!!!!!!!!!!!
                            navigator.getUserMedia(userMediaConfig, function(stream) {
                                $scope.videoElement.srcObject = stream;
                                // Mute the video, because some browsers (like Chrome) won't play it automatically otherwise
                                // (because the user didn't interact with the document first ...)
                                //$scope.videoElement.muted = true;
                                $scope.videoElement.volume = 0;  // replace muted
                                                            
                             
                                // Show the video at startup if required (i.e. our own autoplay feature ...)
                                if ($scope.config.allowVideoDisplay === false) {
                                    // TODO check whether this is required (since the md-card element isn't generated anyway ...
                                    // Use 'display' since that frees all space not being used
                                    //$scope.divElement.removeChild($scope.videoElement);
                                    $scope.divElement.removeChild($scope.svgElement);
                                }
                                else {
                                    if ($scope.config.startupVideoDisplay) {
                                        // Show the video svg element instead of the no-image element
                                        $scope.divElement.appendChild($scope.videoElement);
                                        $scope.divElement.removeChild($scope.svgElement); 
                                        // Start playing the video, since it is being displayed
                                        $scope.videoElement.play();
                                        $scope.isVideoPlaying = true;
                                        $scope.config.isVideoDisplayed = true;
                                    }
                                    else {
                                        // Show the no-image svg element instead of the video element  
                                        //$scope.divElement.removeChild($scope.videoElement);
                                       // $scope.divElement.appendChild($scope.svgElement);                                         
                                    }
                                }
                               
                            },
                            function(err) {
                                $scope.errorText = err;
                                
                                // TODO update the node status in the flow editor
                                console.log(err);
                            });
                        }
                        
                        $scope.$on('$destroy', function() {
                            $scope.recorderStatus = null;
                            
                            if ($scope.rafId) {
                                // When streaming to the server is currently busy, we need to stop it
                                cancelAnimationFrame($scope.rafId);
                                $scope.rafId = null;
                            }
   
                            if ($scope.timerId) {
                                // When a timer is currently busy, we need to stop it
                                clearTimeout($scope.timerId); 
                                $scope.timerId = null;
                            }
                        })                        
                        
                        // Watch input messages arriving from the Node-RED flow
                        $scope.$watch('msg', function(newVal, oldVal) {
                            if (!newVal) {
                                return;
                            }
                            
                            if (!$scope.acceptMessages) {
                                return;
                            }
                    
                            if (typeof newVal.payload !== "string") {
                                console.log("The msg.payload should contain a string (command)!");
                                return;
                            }
                            
                            if ($scope.errorText) {
                                console.log("The msg will be ignored, due to error during setup: " + $scope.errorText);
                                return;
                            }

                            switch(newVal.payload) {
                                case "take_picture":
                                    if ($scope.recorderStatus !== null) {
                                        console.log("No use to take a snapshot while we are already recording");
                                        return;
                                    }
                              
                                    $scope.recorderStatus = "snapshot";
                               
                                    // The video element should be playing, to be able to grab a picture from it...
                                    if ($scope.isVideoPlaying === false) {  
                                        // Make sure the video element is running when the frame is grabbed from it.
                                        // Don't use the 'play' event, but use the 'playing' event instead.  Otherwise the play() function has been called,
                                        // but the images aren't loaded yet into the buffer.  As a result we will get the image of the PREVIOUS takeSnapshot 
                                        // function call!!!!!!!!!!!!!!!!!!!
                                        // See https://stackoverflow.com/questions/14265332/html5-play-event-vs-playing-event-in-video-tag
                                        $scope.videoElement.onplaying = function() {
                                            // When the video element is currently displayed, we need to keep the video playing.
                                            // In the other case we will pause the video, to avoid wasting system resources.
                                            if ($scope.config.isVideoDisplayed === false) {
                                                // At this moment the video hasn't buffered any frames yet.  So let's keep it playing
                                                // for a short period of time, to make sure we have received at least 1 frame ...
                                                setTimeout(function() {
                                                    takeSnapshot();
                                                    $scope.videoElement.pause();
                                                    $scope.isVideoPlaying = false;
                                                }, 100);
                                            }  
                                        };
                                        
                                        $scope.videoElement.play();
                                        $scope.isVideoPlaying = true;
                                    }
                                    else {
                                        // The video element was already playing, so just grab an iframe from it.
                                        // Afterwards we just let the video playing ...
                                        takeSnapshot();
                                    }  
                        
                                    $scope.recorderStatus = null;
                                    
                                    break;
                                case "start_streaming":
                                    // When status is 'streaming', the streaming has already started (so no problem)
                                    if ($scope.recorderStatus !== null && $scope.recorderStatus !== "streaming") {
                                        console.log("Cannot start streaming since recorder status = " + $scope.recorderStatus);
                                        return;
                                    }
                                          
                                    $scope.recorderStatus = "streaming";
                                    
                                    // The video element should be playing, to be able to grab a picture from it...
                                    if ($scope.isVideoPlaying === false) {
                                        $scope.videoElement.play();
                                        $scope.isVideoPlaying = true;
                                    }
                                
                                    // Start taking pictures to stream those towards the server
                                    $scope.rafId = requestAnimationFrame(takeSnapshot);                                   
                                   
                                    break;
                                case "start_timer":
                                    // When status is 'timer', a timer has already started (so no problem)
                                    if ($scope.recorderStatus !== null && $scope.recorderStatus !== "timer") {
                                        console.log("Cannot start timer since recorder status = " + $scope.recorderStatus);
                                        return;
                                    }
                                        
                                    $scope.recorderStatus = "timer";
                                    
                                    // The video element should be playing, to be able to grab a picture from it...
                                    if ($scope.isVideoPlaying === false) {
                                        $scope.videoElement.play();
                                        $scope.isVideoPlaying = true;
                                    }
                                    
                                    // Default interval is 1 second, if no interval field has been specified in the input message
                                    $scope.timerInterval = parseInt(newVal.interval) || 1000;
                                
                                    // Get the first picture, which will launch a timer to repeat the process periodically...
                                    takeSnapshot();                                   

                                    break;
                                case "stop":
                                    // When status is null, the recorder has already stopped (so no problem)
                                    if ($scope.recorderStatus === null) {
                                        return;
                                    }

                                    $scope.recorderStatus = null;
                                    
                                    if ($scope.rafId) {
                                        // When streaming to the server is currently busy, we need to stop it
                                        cancelAnimationFrame($scope.rafId);
                                        $scope.rafId = null;
                                    }
                                    
                                    if ($scope.timerId) {
                                        // When a timer is currently busy, we need to stop it
                                        clearTimeout($scope.timerId); 
                                        $scope.timerId = null;
                                    }
                                  
                                    // When the video element is currently displayed, we need to keep the video playing.
                                    // In the other case we will pause the video, to avoid wasting system resources.
                                    if ($scope.config.isVideoDisplayed === false) {
                                        $scope.videoElement.pause();
                                        $scope.isVideoPlaying = false;
                                    }  

                                    break;
                                case "display_video":
                                    // Video can only be displayed, when that is being allowed in the config screen
                                    if ($scope.config.allowVideoDisplay === false) {
                                        console.log("The settings don't allow to show video");
                                    }
                                    else {
                                        // We don't need to do anything, when the video is displayed (and running) already
                                        if ($scope.config.isVideoDisplayed === false ) {                
                                            // Show video element instead of the no-image svg element
                                            $scope.divElement.appendChild($scope.videoElement);
                                            $scope.divElement.removeChild($scope.svgElement);
                                            $scope.config.isVideoDisplayed = true;
                                        }
                                            
                                        // As soon as the video is displayed again, it needs to start playing automatically
                                        if ($scope.isVideoPlaying === false) {
                                            $scope.videoElement.play();
                                            $scope.isVideoPlaying = true;
                                        }
                                    }
                                    
                                    break;
                                case "hide_video":
                                    // We don't need to do anything, when the video is not displayed currently
                                    if ($scope.config.isVideoDisplayed === true) {
                                        // Show the no-image svg element instead of the video element
                                        $scope.divElement.removeChild($scope.videoElement);
                                        $scope.divElement.appendChild($scope.svgElement); 
                                        $scope.config.isVideoDisplayed = false;
                                    }
                                    
                                    // When no recording is active, the video can be paused to avoid wasting system resources
                                    if ($scope.isVideoPlaying === true && $scope.recorderStatus === null) {
                                        $scope.videoElement.pause();
                                        $scope.isVideoPlaying = false;
                                    }
                                    
                                    break;
                                case "ignore":
                                    // Ignore the input message
                                    break;
                                default:
                                    console.log("Unknown command (" + newVal.payload + ") in msg.payload"); 
                            }
                        })
                    }
                });
            }
        }
        catch (e) {
            console.log(e);
        }
        node.on("close", function() {
            if (done) {
                done();
            }
        });
    }
    RED.nodes.registerType('ui_media_recorder', UiMediaRecorderNode);
};
