/************** 
 * Corsi Test *
 **************/

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([0, 0, 0]),
  units: 'height'
});

// store info about the experiment session:
let expName = 'corsi';  // from the Builder filename that created this script
let expInfo = {'session': '001', 'participant': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionsRoutineBegin);
flowScheduler.add(instructionsRoutineEachFrame);
flowScheduler.add(instructionsRoutineEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(thanksRoutineBegin);
flowScheduler.add(thanksRoutineEachFrame);
flowScheduler.add(thanksRoutineEnd);
flowScheduler.add(quitPsychoJS, true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, false);

psychoJS.start({configURL: 'config.json', expInfo: expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('completedURL', 'incompleteURL');
  return Scheduler.Event.NEXT;
}

var instructionsClock;
var instrText;
var ISIClock;
var blank;
var trialClock;
var blk1;
var blk2;
var blk3;
var blk4;
var blk5;
var mouse;
var thanksClock;
var thanksText;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instrText = new visual.TextStim({
    win : psychoJS.window,
    name : 'instrText',
    text : "On each trial, watch the sequence of squares flashing red. When the sequence finishes try to click the same sequence.\n\nWhen you've made the same number of clicks as the original sequence the next trial will start.\n\nTo make it easier squares will change color after you click them\n\nPress any key to get started",
    font : 'Arial',
    units : 'height',   pos : [0, 0], height : 0.05,  wrapWidth : 1.5, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : 0.0 
  });
  
  // Initialize components for Routine "ISI"
  ISIClock = new util.Clock();
  blank = new visual.TextStim({
    win : psychoJS.window,
    name : 'blank',
    text : '+',
    font : 'Arial',
    pos : [0, 0], height : 0.2,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : 0.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  blk1 = new Rect ({
    win: psychoJS.window, name: 'blk1',
    units: psychoJS.window.units,
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1.0, interpolate: true,
  });
  blk2 = new Rect ({
    win: psychoJS.window, name: 'blk2',
    units: psychoJS.window.units,
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1.0, interpolate: true,
  });
  blk3 = new Rect ({
    win: psychoJS.window, name: 'blk3',
    units: psychoJS.window.units,
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1.0, interpolate: true,
  });
  blk4 = new Rect ({
    win: psychoJS.window, name: 'blk4',
    units: psychoJS.window.units,
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1.0, interpolate: true,
  });
  blk5 = new Rect ({
    win: psychoJS.window, name: 'blk5',
    units: psychoJS.window.units,
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1.0, interpolate: true,
  });
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  thanksText = new visual.TextStim({
    win : psychoJS.window,
    name : 'thanksText',
    text : 'Great! Thanks for your help!\n\nAll done!',
    font : 'Arial',
    units : 'height',   pos : [0, 0], height : 0.07,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var endInstructions;
var instructionsComponents;
function instructionsRoutineBegin() {
  //------Prepare to start Routine 'instructions'-------
  t = 0;
  instructionsClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  endInstructions = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  instructionsComponents = [];
  instructionsComponents.push(instrText);
  instructionsComponents.push(endInstructions);
  
  for (const thisComponent of instructionsComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function instructionsRoutineEachFrame() {
  //------Loop for each frame of Routine 'instructions'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = instructionsClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *instrText* updates
  if (t >= 0.0 && instrText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instrText.tStart = t;  // (not accounting for frame time here)
    instrText.frameNStart = frameN;  // exact frame index
    instrText.setAutoDraw(true);
  }
  
  // *endInstructions* updates
  if (t >= 0.0 && endInstructions.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    endInstructions.tStart = t;  // (not accounting for frame time here)
    endInstructions.frameNStart = frameN;  // exact frame index
    endInstructions.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }
  if (endInstructions.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys();
    
    // check for quit:
    if ("escape" in theseKeys) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of instructionsComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEnd() {
  //------Ending Routine 'instructions'-------
  for (const thisComponent of instructionsComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS,
    nReps: 5, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'conditions.xlsx',
    seed: undefined, name: 'trials'});
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    thisScheduler.add(importConditions(trials));
    thisScheduler.add(ISIRoutineBegin);
    thisScheduler.add(ISIRoutineEachFrame);
    thisScheduler.add(ISIRoutineEnd);
    thisScheduler.add(trialRoutineBegin);
    thisScheduler.add(trialRoutineEachFrame);
    thisScheduler.add(trialRoutineEnd);
    thisScheduler.add(endLoopIteration(thisTrial));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}

var ISIComponents;
function ISIRoutineBegin() {
  //------Prepare to start Routine 'ISI'-------
  t = 0;
  ISIClock.reset(); // clock
  frameN = -1;
  routineTimer.add(0.500000);
  // update component parameters for each repeat
  // keep track of which components have finished
  ISIComponents = [];
  ISIComponents.push(blank);
  
  for (const thisComponent of ISIComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function ISIRoutineEachFrame() {
  //------Loop for each frame of Routine 'ISI'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = ISIClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *blank* updates
  if (t >= 0.0 && blank.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    blank.tStart = t;  // (not accounting for frame time here)
    blank.frameNStart = frameN;  // exact frame index
    blank.setAutoDraw(true);
  }
  frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    blank.setAutoDraw(false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of ISIComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function ISIRoutineEnd() {
  //------Ending Routine 'ISI'-------
  for (const thisComponent of ISIComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

var gotValidClick;
var blkIndex;
var nextSwitch;
var doingResponse;
var currBlock;
var blocks;
var sequence;
var trialComponents;
function trialRoutineBegin() {
  //------Prepare to start Routine 'trial'-------
  t = 0;
  trialClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // setup some python lists for storing info about the mouse
  // current position of the mouse:
  mouse.x = [];
  mouse.y = [];
  mouse.leftButton = [];
  mouse.midButton = [];
  mouse.rightButton = [];
  mouse.time = [];
  mouse.clicked_name = [];
  gotValidClick = false; // until a click is received
  // initial state
  blkIndex = 0;
  nextSwitch = my.blockDuration;
  doingResponse = false;
  currBlock = undefined;
  
  // store blocks as a dictionary (to switch between name/object)
  blocks = {};
  blocks['blk1']=my.blk1;
  blocks['blk2']=my.blk2;
  blocks['blk3']=my.blk3;
  blocks['blk4']=my.blk4;
  blocks['blk5']=my.blk5;
  
  // Create grid of locations with jitter
  let xGrid = [-.3, 0, .3];
  let yGrid = [-.3, 0, .3];
  let locations = [];
  for (let x in xGrid) {
      for (let y in yGrid) {
          locations.push([xGrid[x]+Math.random(2)*.1 -.05, yGrid[y]+Math.random(2)*.1 -.05]);
      }
  }
  
  // Shuffle locations
  for (let rolls in my.blocks) {
      locations = locations.sort(function() { return 0.5 - Math.random()});
  }
  var counter = 0;  // location index
  
  // give blocks a new set of random locations
  for (let items in my.blocks) {
      if (blocks[items].hasOwnProperty('pos')) {
          blocks[items].pos = locations[counter];
          counter = counter + 1; 
      }
      if (blocks[items].hasOwnProperty('fillColor')) {
          blocks[items].fillColor = new Color('white');
          blocks[items].lineColor = new Color('white');
      }
  }
  
  sequence = ["blk1", "blk2", "blk3", "blk4", "blk5"]
  // keep track of which components have finished
  trialComponents = [];
  trialComponents.push(blk1);
  trialComponents.push(blk2);
  trialComponents.push(blk3);
  trialComponents.push(blk4);
  trialComponents.push(blk5);
  trialComponents.push(mouse);
  
  for (const thisComponent of trialComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var prevButtonState;
function trialRoutineEachFrame() {
  //------Loop for each frame of Routine 'trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = trialClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *blk1* updates
  if (t >= 0.0 && blk1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    blk1.tStart = t;  // (not accounting for frame time here)
    blk1.frameNStart = frameN;  // exact frame index
    blk1.setAutoDraw(true);
  }
  
  // *blk2* updates
  if (t >= 0.0 && blk2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    blk2.tStart = t;  // (not accounting for frame time here)
    blk2.frameNStart = frameN;  // exact frame index
    blk2.setAutoDraw(true);
  }
  
  // *blk3* updates
  if (t >= 0.0 && blk3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    blk3.tStart = t;  // (not accounting for frame time here)
    blk3.frameNStart = frameN;  // exact frame index
    blk3.setAutoDraw(true);
  }
  
  // *blk4* updates
  if (t >= 0.0 && blk4.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    blk4.tStart = t;  // (not accounting for frame time here)
    blk4.frameNStart = frameN;  // exact frame index
    blk4.setAutoDraw(true);
  }
  
  // *blk5* updates
  if (t >= 0.0 && blk5.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    blk5.tStart = t;  // (not accounting for frame time here)
    blk5.frameNStart = frameN;  // exact frame index
    blk5.setAutoDraw(true);
  }
  // *mouse* updates
  if ((doingResponse) && mouse.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    mouse.tStart = t;  // (not accounting for frame time here)
    mouse.frameNStart = frameN;  // exact frame index
    mouse.status = PsychoJS.Status.STARTED;
    mouse.mouseClock.reset();
    prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
    }
  if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not stopped!
    let buttons = mouse.getPressed();
    if (!buttons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
      prevButtonState = buttons;
      if (buttons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
        const xys = mouse.getPos();
        mouse.x.push(xys[0]);
        mouse.y.push(xys[1]);
        mouse.leftButton.push(buttons[0]);
        mouse.midButton.push(buttons[1]);
        mouse.rightButton.push(buttons[2]);
        mouse.time.push(mouse.mouseClock.getTime());
        // check if the mouse was inside our 'clickable' objects
        gotValidClick = false;
        for (const obj of [blk1, blk2, blk3, blk4, blk5]) {
          if (obj.contains(mouse)) {
            gotValidClick = true;
            mouse.clicked_name.push(obj.name)
          }
        }
      }
    }
  }
  if (!(doingResponse) && (t > nextSwitch)) {
      if (typeof my.currBlock != 'undefined') {
          // reset color of current block
          currBlock.fillColor =  new Color('white');
          currBlock.lineColor =  new Color('white');
      }
      // then change current block and make that red
      if (blkIndex >= Object.keys(blocks).length) {
          doingResponse = true;  // no more blocks to show
      } else {
          currBlockName = my.sequence[my.blkIndex];
          currBlock = my.blocks[my.currBlockName];
          currBlock.fillColor = new Color('red');
          currBlock.lineColor = new Color('red');
          // track time of this change
          nextSwitch = parseFloat(nextSwitch) + parseFloat(blockDuration);
      }
      blkIndex = blkIndex + 1;
  }
  
  // all clicked?
  if (mouse.clicked_name.length >= sequence.length) {
      continueRoutine = false;
  }
  
  // update color of clicked
  for (let blockName in my.mouse.clicked_name) {
      for (let eachBlock in my.blocks) {
          if (mouse.clicked_name[blockName] == blocks[eachBlock].name) {
              blocks[eachBlock].fillColor = new Color('silver');
              blocks[eachBlock].lineColor = new Color('silver');
          }
      }
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of trialComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEnd() {
  //------Ending Routine 'trial'-------
  for (const thisComponent of trialComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // store data for thisExp (ExperimentHandler)
  psychoJS.experiment.addData('mouse.x', mouse.x);
  psychoJS.experiment.addData('mouse.y', mouse.y);
  psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
  psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
  psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
  psychoJS.experiment.addData('mouse.time', mouse.time);
  psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name);
  
  
  // the Routine "trial" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var thanksComponents;
function thanksRoutineBegin() {
  //------Prepare to start Routine 'thanks'-------
  t = 0;
  thanksClock.reset(); // clock
  frameN = -1;
  routineTimer.add(1.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  thanksComponents = [];
  thanksComponents.push(thanksText);
  
  for (const thisComponent of thanksComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function thanksRoutineEachFrame() {
  //------Loop for each frame of Routine 'thanks'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = thanksClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *thanksText* updates
  if (t >= 0.0 && thanksText.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    thanksText.tStart = t;  // (not accounting for frame time here)
    thanksText.frameNStart = frameN;  // exact frame index
    thanksText.setAutoDraw(true);
  }
  frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (thanksText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    thanksText.setAutoDraw(false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of thanksComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function thanksRoutineEnd() {
  //------Ending Routine 'thanks'-------
  for (const thisComponent of thanksComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}


function endLoopIteration(thisTrial) {
  // ------Prepare for next entry------
  return function () {
    if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(isCompleted) {
  psychoJS.window.close();
  psychoJS.quit({isCompleted});

  return Scheduler.Event.QUIT;
}
