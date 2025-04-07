
import isParallel from "../src/utils/get_settings"
import {expect, test} from "@jest/globals"

test("Tests if works IsParallel function", () => {
    process.env.PARALLEL_SITE = "1"
    expect(isParallel()).toBe(true)
    process.env.PARALLEL_SITE = "0"
    expect(isParallel()).toBe(false)
})
