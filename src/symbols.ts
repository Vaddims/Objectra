import { Transformator } from "./transformator";

if ("asyncDispose" in Symbol) Transformator.registerSymbol(Symbol.asyncDispose);
if ("dispose" in Symbol) Transformator.registerSymbol(Symbol.dispose);
Transformator.registerSymbol(Symbol.toStringTag);
Transformator.registerSymbol(Symbol.asyncIterator);
Transformator.registerSymbol(Symbol.hasInstance);
Transformator.registerSymbol(Symbol.isConcatSpreadable);
Transformator.registerSymbol(Symbol.iterator);
Transformator.registerSymbol(Symbol.match);
Transformator.registerSymbol(Symbol.matchAll);
Transformator.registerSymbol(Symbol.replace);
Transformator.registerSymbol(Symbol.search);
Transformator.registerSymbol(Symbol.species);
Transformator.registerSymbol(Symbol.split);
