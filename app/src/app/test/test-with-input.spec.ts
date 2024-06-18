import {Component, input} from "@angular/core";
import {BaseComponent} from "./base";
import {TestBed} from "@angular/core/testing";
import someUtilityFn from "./some-utility-fn";

@Component({template: '', standalone: true})
export class TestComponent extends BaseComponent {
    public readonly input = input.required<string>();
}

jest.mock('./some-utility-fn');

jest.mocked(someUtilityFn).mockReturnValue({someValue: 'other-value'});

it('TestComponent', () => {
  expect(TestBed.createComponent(TestComponent).componentInstance.someValue).toBe('other-value');
});
