// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.754.4/runtimes/native1.12-tchmi/TcHmi.d.ts" />

/*
 * Generated 4/14/2022 8:18:21 AM
 * Copyright (C) 2022
 */
var TcHmi;
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    let Controls;
    (function (/** @type {globalThis.TcHmi.Controls} */ Controls) {
        let AsteriscoNegrito;
        (function (AsteriscoNegrito) {
            class AsteriscoParaNegrito extends TcHmi.Controls.System.TcHmiControl {
                /*
                Attribute philosophy
                --------------------
                - Local variables are not set while definition in class, so they have the value 'undefined'.
                - On compile the Framework sets the value from HTML or from theme (possibly 'null') via normal setters.
                - The "changed detection" in the setter will result in processing the value only once while compile.
                - Attention: If we have a Server Binding on an Attribute the setter will be called once with null to initialize and later with the correct value.
                */
                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element, pcElement, attrs) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);

                    var sTextointerno = null;
                    var iTamanhoFonte = 16;
                }
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_AsteriscoNegrito_AsteriscoParaNegrito-Template');
                    this.__elementContainer = this.__elementTemplateRoot.find('.tchmi_container_padrao');
                    this.__elementText = this.__elementTemplateRoot.find('.tchmi_titulo');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html');
                    }
                    // Call __previnit of base class
                    super.__previnit();
                }
                /**
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init() {
                    super.__init();
                }
                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach() {
                    super.__attach();

                }
                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach() {
                    super.__detach();
                    
                }
                /**
                * Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy() {
                    /**
                    * While __keepAlive is set to true control must not be destroyed.
                    */
                    if (this.__keepAlive) {
                        return;
                    }
                    super.destroy();
                    /**
                    * Free resources like child controls etc.
                    */
                }


                getTexto = function () {
                    return this.sTextointerno;
                }

                setTexto(newValue) {

                    var negrito = false;
                    var AjeitoTextoEmNegrito = '';

                    for (var i = 0; i < newValue.length; i++) {
                        if (newValue.charAt(i) == '*') {
                            negrito = !negrito;
                        } else {

                            if (negrito) {
                                AjeitoTextoEmNegrito = AjeitoTextoEmNegrito + newValue.charAt(i).bold();
                            } else {
                                AjeitoTextoEmNegrito = AjeitoTextoEmNegrito + newValue.charAt(i);
                            }
                        }
                    }

                    this.sTextointerno = AjeitoTextoEmNegrito;


                    var element = this.__elementText.get(0);
                    element.innerHTML = this.sTextointerno;
                }

                getTamanhoFonte = function () {
                    return this.iTamanhoFonte;
                }

                setTamanhoFonte(newValue) {
                    this.iTamanhoFonte = newValue;
                    var element = this.__elementContainer.get(0);
                    element.style.fontSize = this.iTamanhoFonte + 'px';
                }






            }
            AsteriscoNegrito.AsteriscoParaNegrito = AsteriscoParaNegrito;
        })(AsteriscoNegrito = Controls.AsteriscoNegrito || (Controls.AsteriscoNegrito = {}));
    })(Controls = TcHmi.Controls || (TcHmi.Controls = {}));
})(TcHmi || (TcHmi = {}));
/**
* Register Control
*/
TcHmi.Controls.registerEx('AsteriscoParaNegrito', 'TcHmi.Controls.AsteriscoNegrito', TcHmi.Controls.AsteriscoNegrito.AsteriscoParaNegrito);
