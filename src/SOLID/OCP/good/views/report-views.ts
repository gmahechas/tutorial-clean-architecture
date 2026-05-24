import type { View, ViewModel } from "../interfaces/financial-interfaces.js";

export class WebView implements View {
    display(vm: ViewModel): void {
        console.log("--- RENDERING WEB VIEW ---");
        console.log(vm.content);
        console.log("--------------------------");
    }
}

export class PDFView implements View {
    display(vm: ViewModel): void {
        console.log("--- PRINTING TO PDF ---");
        console.log(vm.content);
        console.log("-----------------------");
    }
}

