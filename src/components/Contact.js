import React, { Component } from 'react';


class Contact extends Component {

  render() {
    return (
	  <div className="contact">

	  <h3>Contact Me</h3>
		<form action="mailto:catherine.lin.93@gmail.com" method="GET">
			<label>*Name:</label>
			<br />
			<input type="text" size="40"required/>
			<br />
			<label>*Email:</label>
			<br />
			<input type="text" size="40" required/>
			<br />
			<label>Message:</label>
			<br />
			<textarea className="msgbox" rows="17" cols="40" placeholder="Feel free to leave some comments/suggestions/feedbacks! :)" />
			<br />
			<button type="submit">Submit</button>
		</form>
      </div>
    );
  }
}

export default Contact;


// <form action="mailto:taichi.chikung@gmail.com" method="GET">
// 		<div class="name-email">
// 			<div>
// 				<label id="email">*Email: </label>
// 				<input type="email" id="email">
				
// 			</div>
// 			<div>
// 				<label id="name">*Name: </label>
// 				<input type="text" required="" name="subject">
				
// 			</div>
// 		</div>
// 		<div style="width: auto; overflow: hidden;">
// 			<grammarly-ghost spellcheck="false"><div data-id="21805560-db52-9320-8656-94da526c4cda" data-gramm_id="21805560-db52-9320-8656-94da526c4cda" data-gramm="gramm" data-gramm_editor="true" class="gr_ver_2" gramm="true" contenteditable="true" style="position: absolute; color: transparent; overflow: hidden; white-space: pre-wrap; border-radius: 0px; box-sizing: content-box; height: 130px; width: 500px; margin: 2921px 0px 0px 239px; padding: 0px; z-index: 0; border-width: 1px; border-style: solid; background: none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255); top: 0px; left: 0px;"><span style="display: inline-block; line-height: normal; color: transparent; overflow: hidden; text-align: left; float: initial; clear: none; box-sizing: border-box; vertical-align: baseline; white-space: pre-wrap; width: 100%; margin: 0px; padding: 0px; border: 0px; font-style: normal; font-variant: normal; font-weight: 400; font-stretch: normal; font-size: 11px; font-family: system-ui; letter-spacing: normal; text-shadow: none; height: 130px;"></span><br></div></grammarly-ghost><textarea placeholder="Please leave comments/suggestions/feedback or request a C.V" rows="10" columns="10" name="body" data-gramm="true" data-txt_gramm_id="21805560-db52-9320-8656-94da526c4cda" data-gramm_id="21805560-db52-9320-8656-94da526c4cda" spellcheck="false" data-gramm_editor="true" style="z-index: auto; position: relative; line-height: normal; font-size: 11px; transition: none; background: transparent !important;"></textarea><grammarly-btn><div class="_1BN1N Kzi1t _2DJZN" style="z-index: 2; transform: translate(709px, 2403px);"><div class="_1HjH7"><div title="Protected by Grammarly" class="_3qe6h">&nbsp;</div></div></div></grammarly-btn>
// 		</div>
// 		<div>
// 			<button type="submit" class="btn" value="send">Submit</button>
// 		</div>
// 	</form>