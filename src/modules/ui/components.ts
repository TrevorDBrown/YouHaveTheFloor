/*
    YouHaveTheFloor (YHTF)
    (c)2020 Trevor D. Brown. All rights reserved.

    components.ts - definitions for all classes associated with the UI.
*/

import uuid = require('uuid');

class YHTF_UIComponent {
    private uuid: string;
    private id: string;
    private classes: string[];

    constructor(newID: string, newClasses?: string[]){
        this.uuid = YHTF_UIComponent.generateUUID();
        this.id = newID;
        this.classes = newClasses || ["YHTFDefaultClass"];
    }

    getUUID(){
        return this.uuid;
    }

    setID(newID: string){
        this.id = newID;
    }

    getID(){
        return this.id;
    }

    getClasses(){
        return this.classes;
    }

    addClass(newClass: string){
        this.classes.push(newClass);
    }

    removeClass(oldClass: string){
        var newClasses: string[] = [];
        
        // TODO: This is shameful... :/ Optimize later.
        this.classes.forEach(entry => {
            if (entry != oldClass){
                newClasses.push(entry);
            }
        });

        this.classes = newClasses;
    }

    static generateUUID(){
        return uuid.v4();
    }
    
}

export class YHTF_UIFrame extends YHTF_UIComponent {
    private width: number;
    private height: number;

    private parentUIComponent: YHTF_UIFrame | null;
    private childrenUIComponents: YHTF_UIFrame[];

    constructor(newID: string, newWidth: number, newHeight: number, newParent?: YHTF_UIFrame){
        super(newID);
        this.width = newWidth;
        this.height = newHeight;
        this.parentUIComponent = newParent || null;
        this.childrenUIComponents = [];
    }

    setParent(newParent: YHTF_UIFrame){
        this.parentUIComponent = newParent;
    }

    addChild(newChild: YHTF_UIFrame){
        newChild.setParent(this);
        this.childrenUIComponents.push(newChild);
    }

    removeChild(oldChild: YHTF_UIFrame){
        var newChildrenUIComponents: YHTF_UIFrame[] = [];

        // TODO: This is shameful... :/ Optimize later.
        this.childrenUIComponents.forEach(entry => {
            if (entry.getUUID() != oldChild.getUUID()){
                newChildrenUIComponents.push(entry);
            }
        });

        this.childrenUIComponents = newChildrenUIComponents;
    }
}

class YHTF_UIHeader extends YHTF_UIFrame {
    private content: string;

    constructor(newID: string, newWidth: number, newHeight: number, newContent: string){
        super(newID, newWidth, newHeight);
        this.content = newContent;
    }

    updateContent(newContent: string){
        this.content = newContent;
    }

    getContent(){
        return this.content;
    }
}

export class YHTF_UIFooter extends YHTF_UIFrame {
    private copyright: string;

    constructor(newID: string, newWidth: number, newHeight: number, newCopyright: string){
        super(newID, newWidth, newHeight);
        this.copyright = newCopyright;
    }
}

export class YHTF_UIBlackboard extends YHTF_UIFrame {
    private backColor: string;
    private foreColor: string;

    private title: string;

    constructor(newID: string, newWidth: number, newHeight: number, newTitle?: string, newBackColor?: string, newForeColor?: string){
        super(newID, newWidth, newHeight);
        this.title = newTitle || "My Blackboard";

        this.backColor = newBackColor || "#000000"; // Default to Black
        this.foreColor = newForeColor || "#FFFFFF"; // Default to White
    }

    setTitle(newTitle: string){
        this.title = newTitle;
    }

    getTitle(){
        return this.title;
    }

    setBackColor(newBackColor: string){
        this.backColor = newBackColor;
    }

    getBackColor(){
        return this.backColor;
    }

    setForeColor(newForeColor: string){
        this.foreColor = newForeColor;
    }

    getForeColor(){
        return this.foreColor;
    }

}

export class YHTF_UIStickyNote extends YHTF_UIFrame {
    private backColor: string;
    private foreColor: string;

    private content: string;

    constructor(newID: string, newWidth: number, newHeight: number, newContent: string, newBackColor?: string, newForeColor?: string){
        super(newID, newWidth, newHeight);
        this.content = newContent;

        this.backColor = newBackColor || "#FFFF00"  // Default to Yellow
        this.foreColor = newForeColor || "#000000"  // Default to Black
    }

    setContent(newContent: string){
        this.content = newContent;
    }

    getContent(){
        return this.content;
    }

    setBackColor(newBackColor: string){
        this.backColor = newBackColor;
    }

    getBackColor(){
        return this.backColor;
    }

    setForeColor(newForeColor: string){
        this.foreColor = newForeColor;
    }

    getForeColor(){
        return this.foreColor;
    }
}