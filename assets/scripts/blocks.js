$(document).ready(function () {
  $("#runBtn").click(function () {
    runcode();
  });
  $("#resetBtn").click(function () {
    reset();
  });
});

var d = new Date();
var dayte = d;
var time = d.getHours();

Blockly.Blocks['curious_block'] = {
  init: function() {
    this.appendStatementInput("Bot")
        .setCheck(null)
        .appendField(new Blockly.FieldLabelSerializable("Bot"), "Bot");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['curious_block'] = function(block) {
  var statements_bot = Blockly.JavaScript.statementToCode(block, 'Bot');
  // TODO: Assemble JavaScript into code variable.
  return statements_bot;
};

Blockly.Blocks['dropdown'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["What is the date Today?", `${dayte}`], ["What is the time now?",`${time}`], ["How are you?","Fine"], ["What is JavaScript?","JavaScript is the programming language of the Web."], ["What is your name?","n"]]), "dropdown_value");
    this.setColour(230);
    this.setPreviousStatement(true);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['dropdown'] = function(block) {
  var dropdown_input = block.getFieldValue('dropdown_value');
  // TODO: Assemble JavaScript into code variable.
  var code = `var a = "${dropdown_input}"`;
  return code;
};



var workspace = Blockly.inject("blocklyDiv", {
  media: "assets/media/",
  toolbox: document.getElementById("toolbox"),
});

function redrawUi() {
  if (typeof a !== "undefined") {
    $("#inputBox").text(a);
  } else {
    $("#inputBox").text("");
  }
}

function runcode() {
  // Generate JavaScript code and run it.
  var geval = eval;
  try {
    geval(Blockly.JavaScript.workspaceToCode(workspace));
  } catch (e) {
    console.error(e);
  }
  redrawUi();
}

function reset() {
  delete a;
  workspace.clear();
  redrawUi();
}
