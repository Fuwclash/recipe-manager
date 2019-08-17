import { mount } from "@vue/test-utils";
import Recipes from "../../../resources/js/components/recipes/Recipes.vue";

describe("Recipes", () => {
    it("has a chocolate heading", () => {
        const wrapper = mount(Recipes);
        expectExport(wrapper.html()).toContain("Iced Chocolate");
    });
});
