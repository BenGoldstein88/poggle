/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */
"use strict";
/**
 * The four basic intents.
 */
(function (Intent) {
    Intent[Intent["NONE"] = -1] = "NONE";
    Intent[Intent["PRIMARY"] = 0] = "PRIMARY";
    Intent[Intent["SUCCESS"] = 1] = "SUCCESS";
    Intent[Intent["WARNING"] = 2] = "WARNING";
    Intent[Intent["DANGER"] = 3] = "DANGER";
})(exports.Intent || (exports.Intent = {}));
var Intent = exports.Intent;

//# sourceMappingURL=intent.js.map
