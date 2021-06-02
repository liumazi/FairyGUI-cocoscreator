import { Color, Font, HorizontalTextAlignment, Label, LabelOutline, LabelShadow, Vec2, VerticalTextAlignment } from "cc";
import { AutoSizeType } from "./FieldTypes";
import { GObject } from "./GObject";
import { ByteBuffer } from "./utils/ByteBuffer";
export declare class GTextField extends GObject {
    _label: Label;
    protected _font: string;
    protected _realFont: string | Font;
    protected _fontSize: number;
    protected _color: Color;
    protected _strokeColor?: Color;
    protected _shadowOffset?: Vec2;
    protected _shadowColor?: Color;
    protected _leading: number;
    protected _text: string;
    protected _ubbEnabled: boolean;
    protected _templateVars?: {
        [index: string]: string;
    };
    protected _autoSize: AutoSizeType;
    protected _updatingSize: boolean;
    protected _sizeDirty: boolean;
    protected _outline?: LabelOutline;
    protected _shadow?: LabelShadow;
    constructor();
    protected createRenderer(): void;
    set text(value: string | null);
    get text(): string | null;
    get font(): string | null;
    set font(value: string | null);
    get fontSize(): number;
    set fontSize(value: number);
    get color(): Color;
    set color(value: Color);
    get align(): HorizontalTextAlignment;
    set align(value: HorizontalTextAlignment);
    get verticalAlign(): VerticalTextAlignment;
    set verticalAlign(value: VerticalTextAlignment);
    get leading(): number;
    set leading(value: number);
    get letterSpacing(): number;
    set letterSpacing(value: number);
    get underline(): boolean;
    set underline(value: boolean);
    get bold(): boolean;
    set bold(value: boolean);
    get italic(): boolean;
    set italic(value: boolean);
    get singleLine(): boolean;
    set singleLine(value: boolean);
    get stroke(): number;
    set stroke(value: number);
    get strokeColor(): Color;
    set strokeColor(value: Color);
    get shadowOffset(): Vec2;
    set shadowOffset(value: Vec2);
    get shadowColor(): Color;
    set shadowColor(value: Color);
    set ubbEnabled(value: boolean);
    get ubbEnabled(): boolean;
    set autoSize(value: AutoSizeType);
    get autoSize(): AutoSizeType;
    protected parseTemplate(template: string): string;
    get templateVars(): {
        [index: string]: string;
    };
    set templateVars(value: {
        [index: string]: string;
    });
    setVar(name: string, value: string): GTextField;
    flushVars(): void;
    get textWidth(): number;
    ensureSizeCorrect(): void;
    protected updateText(): void;
    protected assignFont(label: any, value: string | Font): void;
    protected assignFontColor(label: any, value: Color): void;
    protected updateFont(): void;
    protected updateFontColor(): void;
    protected updateStrokeColor(): void;
    protected updateShadowColor(): void;
    protected updateFontSize(): void;
    protected updateOverflow(): void;
    protected markSizeChanged(): void;
    protected onLabelSizeChanged(): void;
    protected handleSizeChanged(): void;
    protected handleGrayedChanged(): void;
    getProp(index: number): any;
    setProp(index: number, value: any): void;
    setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
    setup_afterAdd(buffer: ByteBuffer, beginPos: number): void;
}