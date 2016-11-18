open Preact;

let comp = Preact.h "div" [%bs.obj {a: "1"}]  [|"Preact on Reason!"|];

Preact.render comp (Document.getElementById "app")
