import {
  Compiler,
  ComponentFactory,
  Injectable,
  ModuleWithComponentFactories,
  ViewContainerRef,
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyLoadingService {
  constructor(
    private compiler: Compiler
  ) { }

  loadComponent(
    dynamicImport: Promise<any>,
    viewContainerRef: ViewContainerRef,
    componentName: string // the name of the component from the other module we will be rendering
  ) {
    return dynamicImport
      .then(this.compiler.compileModuleAndAllComponentsAsync.bind(this.compiler))
      .then(
        (compiledModules: ModuleWithComponentFactories<any>) => {
          const desiredComponentFactory = compiledModules.componentFactories.find( // get the desired componentFactory
            (componentFactory: ComponentFactory<any>) =>
              componentFactory.componentType.name === componentName
          );

          if (desiredComponentFactory) {
            viewContainerRef.createComponent(desiredComponentFactory);
          }
          // const componentRef = desiredComponentFactory.create(
          //   module.injector,
          //   undefined,
          //   undefined,
          //   module
          // );
          // debugger;
          //
          // const { componentType: component } = componentRef;
          // console.log(module.injector.get(component));
          // debugger;
          // return component;
        }
      );
  }
}
