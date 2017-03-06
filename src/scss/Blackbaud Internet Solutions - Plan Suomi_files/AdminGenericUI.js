/*jslint eqeqeq: false, onevar: false, undef: false, white: false */

function AdminGenericUI() {
    
    function CheckboxOptionHandler() {
        var CheckboxOptions = [];
        $(document).ready(function () { setCheckboxOptionsDefault(); });

        this.setCheckboxOptionsDefault = function () {
            setCheckboxOptionsDefault();
        };
        function setCheckboxOptionsDefault() {
            $("table.CheckboxOption").each(function(i) {
                // hide inactive fields
                if ($(this).find("input").length <= 0) { $(this).css("display", "none"); }

                // hi-lite selected checkboxes 
                if ($(this).find("input").prop("checked") === true) {
                    $(this).addClass("CheckboxOptionSelected");
                    $(this).siblings("div.SubOptionContainer").css("display", "block");
                }
                else {
                    $(this).siblings("div.SubOptionContainer").css("display", "none");
                }

                $(this).click(function() {
                    if ($(this).find("input").prop("checked") === true) {
                        $(this).addClass("CheckboxOptionSelected");
                        $(this).siblings("div.SubOptionContainer").css("display", "block");
                    }
                    else {
                        $(this).removeClass("CheckboxOptionSelected");
                        $(this).siblings("div.SubOptionContainer").css("display", "none");
                    }
                });
            });
        }
    }
    this.checkboxOptionHandler = new CheckboxOptionHandler();



    function CheckboxTableRowHandler() {

        $(document).ready(function () { setCheckboxTableRowDefault(); });

        this.setCheckboxTableRowDefault = function () {
            setCheckboxTableRowDefault();
        };
        function setCheckboxTableRowDefault() {
            $("tr.RowSelectOption").each(function(i) {
                // hi-lite selected checkboxes
                if ($(this).find(".RowSelectToggle input").prop("checked") === true) {
                    $(this).addClass("CheckboxOptionSelected");
                }
                // un hi-lite selected checkboxes if clicked
                $(this).click(function() {
                    if ($(this).find(".RowSelectToggle input").prop("checked") === true) {
                        $(this).addClass("CheckboxOptionSelected");
                    }
                    else {
                        $(this).removeClass("CheckboxOptionSelected");
                    }
                });
            });
        }
    }
    this.checkboxTableRowHandler = new CheckboxTableRowHandler();



    function RadioGroupingHandler() {
        var RadioGroupings = [];
        $(document).ready(function () { setRadioGroupingsDefault(); });

        this.setRadioGroupingsDefault = function () {
            setRadioGroupingsDefault();
        };
        function setRadioGroupingsDefault() {
            $("div.RadioGroupingNarrow, div.RadioGrouping").each(function(i)
            {
                if ($(this).find("table").length >= 1) {
                    $(this).find("table").attr("cellpadding", "0px");
                    $(this).find("table").attr("cellspacing", "0px");

                    // hi-lite selected radio button
                    $(this).find("input").each(function() {
                        if ($(this).prop("checked") === true) {
                            $(this).parent("td").addClass("RadioSelected");
                        }
                        else {
                            $(this).parent("td").removeClass("RadioSelected");
                        }
                    });
                }
                else {
                    $(this).find("input").each(function() {
                        if ($(this).prop("checked") === true) {
                            $(this).parent("p").addClass("RadioSelected");
                        }
                        else {
                            $(this).parent("p").removeClass("RadioSelected");
                        }
                    });
                }
            });

            $("div.RadioGroupingNarrow, div.RadioGrouping").live("click", function()
            {
                if ($(this).find("table").length >= 1) {
                    $(this).find("input").each(function() {
                        if ($(this).prop("checked") === true) {
                            $(this).parent("td").addClass("RadioSelected");
                        }
                        else {
                            $(this).parent("td").removeClass("RadioSelected");
                        }
                    });
                }
                else {
                    $(this).find("input").each(function() {
                        if ($(this).prop("checked") === true) {
                            $(this).parent("p").addClass("RadioSelected");
                        }
                        else {
                            $(this).parent("p").removeClass("RadioSelected");
                        }
                    });
                }
            });

            $(".RadioContainer.FlipPanelsInJQuery > .RadioGrouping > p > input, .RadioContainer.FlipPanelsInJQuery > .RadioGroupingNarrow > p > input").live("click", function () {

                var parentContainer = $(this).parents(".RadioContainer").eq(0);

                var currentId = $(this).parent().attr('id');
                var panelID = currentId.substr(0, currentId.length - "Item".length) + "Panel";

                var panels = parentContainer.children(".SelectedArea, .SelectedAreaNarrow").children(".SelectedAreaInner").children("div");
                panels.addClass("SelectedAreaInactivePanel");
                panels.filter("#" + panelID).removeClass("SelectedAreaInactivePanel");

                var radioItems = parentContainer.children(".RadioGrouping, .RadioGroupingNarrow").children("p");
                radioItems.removeClass("RadioSelected");
                radioItems.children(":checked").parent().addClass("RadioSelected");

            });

            $(".RadioContainer.FlipPanelsInJQuery > .RadioGrouping > p > input:checked, .RadioContainer.FlipPanelsInJQuery > .RadioGroupingNarrow > p > input:checked").click();
            
        }
    }
    this.radioGroupingHandler = new RadioGroupingHandler();


    function RadioGroupingHandlerHorizontal() {
        var RadioGroupings = [];
        $(document).ready(function () { setRadioGroupingsDefault(); });

        this.setRadioGroupingsDefault = function () {
            setRadioGroupingsDefault();
        };
        function setRadioGroupingsDefault() {
            $("div.RadioGroupingHorizontal").each(function(i) {
                // hi-lite selected radio button
                $(this).find("input").each(function() {
                    if ($(this).prop("checked") === true) {
                        $(this).parent("p").addClass("RadioSelected");
                    }
                    else {
                        $(this).parent("p").removeClass("RadioSelected");
                    }
                });
            });

            $("div.RadioGroupingHorizontal").live("click", function() {
                $(this).find("input").each(function() {
                    if ($(this).prop("checked") === true) {
                        $(this).parent("p").addClass("RadioSelected");
                    }
                    else {
                        $(this).parent("p").removeClass("RadioSelected");
                    }
                });
            });
        }
    }
    this.radioGroupingHandlerHorizontal = new RadioGroupingHandlerHorizontal();






    function InputHandler() {
        $(document).ready(function () { init(); });

        function init() {		

            $(".FieldInput").not("select").focus(function() {
                $(this).addClass("FieldActive");
            });

            $(".FieldInput").blur(function() {
                $(this).removeClass("FieldActive");
            });
            
        }
        
    }
    this.inputHandler = new InputHandler();

	
	
	function VerticalTabHandler(){
	    $(document).ready(function () { init(); });
		
		function init(){
			$("ul.VerticalTabGrouping").live("click", function(e) {
				$(this).find("a.VerticalTabSelected").removeClass("VerticalTabSelected");
				if(e.target.nodeName && e.target.nodeName != "A"){
					$(e.target).parent("a").addClass("VerticalTabSelected");
				}
				else{
					$(e.target).addClass("VerticalTabSelected");
				}
			});
		}
	}
	this.verticalTabHandler = new VerticalTabHandler();

	this.showTabContent = function (myContentID) {
	    showTabContent(myContentID);
	};
	function showTabContent(myContentID){
		var currentContent = $("#"+myContentID);
		var parentContent = currentContent.parent("div.SelectedAreaInner");
		parentContent.children().css("display","none");
		currentContent.css("display","block");
    }




    // used to handle the scrolling of the data grid
    function DataGridHandler() {
        $(document).ready(function () { init(); });

        var dataGrids = [];
        
        function init() {
            parseGrids();
        }

        function DataGrid() {
            var GridContainer;
            var header;
            var divHeader;
            var headerElements;
            var scroller;
            var scrollableContent;
            var table;

            this.init = function (myGridContainer) {
                init(myGridContainer);
            };
            function init(myGridContainer) {
                GridContainer = myGridContainer;
                table = myGridContainer.find("table:first");
                var tableWidth = table.width();
                
                var GridScroller = GridContainer.find("div.GridScroller");
                var GridScrollableContent = GridContainer.find("div.GridScrollableContent");
                
                // if tableWidth = 0, the table is not visible, and will break off
                // functionality, wait for timing loop to catch it as user changes
                // panel etc.
                if (tableWidth > 0 && GridScroller.height() && GridScroller.height() < GridScrollableContent.height()) {
                    
                    header = table.find("tr.DataGridHeader");
                    var temp = document.createElement("div");
                    var divHeader = $(temp);
                    divHeader.addClass("DynamicDataGridHeader");
                    
                    temp = document.createElement("table");
                    var newHeader = $(temp);
                    temp = document.createElement("tr");
                    newHeaderRow = $(temp);

                    var headerColumns = header.find("td.DataGridHeader");

                    var columnWidths = [];
                    
                    headerColumns.each(function(i) {
                        temp = document.createElement("td");
                        $(temp).addClass("DataGridHeaderColumn");
                        var width = Math.floor(100 * ($(this).width() + 10) / tableWidth) + "%";
                        $(temp).css("width", width);
                        $(temp).html($(this).html());

                        newHeaderRow.append(temp);
                        columnWidths.push(width);

                        loopOnce = false;
                    });
                    newHeader.append(newHeaderRow);
                    divHeader.append(newHeader);
                    
                    // pull out old header and place in a thead, that 
                    // is visually hidden
                    temp = document.createElement("thead");
                    $(temp).append(header);
                    table.prepend(temp);// add in divheader to visually replace previous header
                    GridContainer.prepend(divHeader);

                    table.find("tbody tr:first").find("td.DataGridItemCell").each(function(i) {
                        $(this).css("width", columnWidths[i]);
                    });

                    var height = GridScroller.height() - newHeaderRow.height() - 5;
                    GridScroller.css("height", height + "px");
                    GridScroller.addClass("GridScrollerOverflow");
                }
            }

        }

        this.parseGrids = function () {
            parseGrids();
        };

         function parseGrids() {
            
            $("div.GridContainer").each(function(i) {
                if ($(this).find("thead").length === 0) {
                    var temp = new DataGrid();
                    temp.init($(this));
                    dataGrids.push(temp);
                }
            });
            //var t = setTimeout(parseGrids, 250);
        }
    }
    this.dataGridHandler = new DataGridHandler();


    //This function will be called after an update panel postback.  It
    //can be used to initialize things that normally run in $(document).ready (which does not occur after async postbacks)
    this.AsyncInit = function () {
        this.checkboxOptionHandler.setCheckboxOptionsDefault();
    };
	
}
var genericUI = new AdminGenericUI();