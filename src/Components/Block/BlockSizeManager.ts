import { BlockSize } from "../../Types/common";

export default class BlockSizeManager {
    constructor(
        private width: number,
        private height: number,
        private depth: number,
    ) {
        this.setSizes = this.setSizes.bind(this);
    }

    public getSizes(): BlockSize {
        return ({ width: this.width, height: this.height, depth: this.depth })
    }

    public setSizes({ width, height, depth }: BlockSize) {
        this.width = width;
        this.height = height;
        this.depth = depth;
    }

    public setWidth(width: number) {
        this.width = width;
    }

    public getWidth() {
        return this.width
    }

    public setHeight(height: number) {
        this.height = height;
    }

    public getHeight() {
        return this.height;
    }

    public setDepth(depth: number) {
        this.depth = depth
    }

    public getDepth() {
        return this.depth
    }

}