/*
The MIT License (MIT)

Copyright (c) 2014 Chinmay Pendharkar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

(function(){
    window.addEventListener('load', function(){

        var irLength = 256;

        var origBtn = document.getElementById('original');
        var hallBtn = document.getElementById('hall');
        var stairwellBtn = document.getElementById('stairwell');
        var stopBtn = document.getElementById('stop');

        window.AudioContext = window.AudioContext || window.webkitAudioContext
        audioContext = new AudioContext();

        var hallIR, stairwellIR;
        var currentlyPlaying = null;

        var convolver = audioContext.createConvolver();
        var bufferNode = audioContext.createBufferSource();

        bufferNode.loop = true;

        origBtn.addEventListener('click', buttonPressed);
        hallBtn.addEventListener('click', buttonPressed);
        stairwellBtn.addEventListener('click', buttonPressed);
        stopBtn.addEventListener('click', buttonPressed);


        function buttonPressed(event){

            if (bufferNode.buffer == null)
                return;

            if (event.target == origBtn){
                if (currentlyPlaying == null){
                    bufferNode.connect(audioContext.destination);
                }
                else if (currentlyPlaying != "orig"){
                    convolver.disconnect();
                    buffer.disconnect();
                    bufferNode.connect(audioContext.destination);
                }
                currentlyPlaying = "orig";
            }else if(event.target == hallBtn){
                convolver.buffer = hallIR;
                if (currentlyPlaying == "orig"){
                     bufferNode.disconnect();
                }
                if (currentlyPlaying != "stair"){
                    bufferNode.connect(convolver);
                    convolver.connect(audioContext.destination);
                 }
                currentlyPlaying = "hall";
            }else if(event.target == stairwellBtn){
                convolver.buffer = stairwellIR;
                if (currentlyPlaying == "orig"){
                     bufferNode.disconnect();
                }
                if (currentlyPlaying != "hall"){
                    bufferNode.connect(convolver);
                    convolver.connect(audioContext.destination);
                 }
                currentlyPlaying = "stair";
            }else if(event.target == stopBtn){
                bufferNode.disconnect();
                convolver.disconnect();
                currentlyPlaying = null;
            }

            if (bufferNode.playbackState == 0){
                bufferNode.start();
            }

            if (currentlyPlaying == null){
                stopBtn.disabled = true;
            }else{
                stopBtn.disabled = false;
            }
        }

        GetAudioFromURL("../audio/2014/06/gun.mp3", function(err, buffer){
            if (!err){
                bufferNode.buffer = buffer;
                origBtn.disabled = false;
            }else
            console.log(err);
        }, null, audioContext);

        GetAudioFromURL("../audio/2014/06/hallIR.wav", function(err, buffer){
            if (!err){
                hallIR = buffer;
                hallBtn.disabled = false;
            }else
            console.log(err);
        }, null, audioContext);

        GetAudioFromURL("../audio/2014/06/stairwellIR.wav", function(err, buffer){
            if (!err){
                stairwellIR = buffer;
                stairwellBtn.disabled = false;
            }else
            console.log(err);
        }, null, audioContext);


        function GetAudioFromURL(URL, onLoadCallback, onProgressCallback, audioContext){
            if (!audioContext){
                window.AudioContext = window.AudioContext || window.webkitAudioContext
                audioContext = new AudioContext();
            }
            var request = new XMLHttpRequest();
            request.open('GET', URL, true);
            request.responseType = 'arraybuffer';
            request.onload = function () {
                audioContext.decodeAudioData(request.response, function(buffer){
                    if (typeof onLoadCallback === 'function')
                        onLoadCallback(null, buffer);
                },function (){
                    if (typeof onLoadCallback === 'function')
                        onLoadCallback(new Error("Decoding Error"), null);
                });
            };
            request.onerror = function(){
                if (typeof onLoadCallback === 'function')
                    onLoadCallback(new Error("Loading Error"), null);
            }
            request.onprogress = function(event){
                if (typeof onProgressCallback === 'function'){
                    onProgressCallback(event);
                }
            }
            request.send();
        }
    })
})();


