import { Directive, Input, TemplateRef, ViewContainerRef  } from '@angular/core';


@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private hasView = false;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef ) { }

  @Input() set appUnless(comenzar: boolean) {
    if (!comenzar && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (comenzar && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

}
