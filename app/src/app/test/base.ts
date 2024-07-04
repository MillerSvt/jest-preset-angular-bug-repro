import someUtilityFn from "./some-utility-fn";

export class BaseComponent {
    get someValue() {
        return someUtilityFn().someValue;
    }
}
