import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]',
})
export class CustomIfDirective {
  @Input() customIf: boolean = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private vcr: ViewContainerRef
  ) {}

  ngOnInit(): void {
    if (this.customIf) {
      this.vcr.createEmbeddedView(this.templateRef);
    } else {
      this.vcr.clear();
    }
  }
}
