import { FilterType } from "@/types/FilterTypes";
import { PriorityType } from "@/types/PriorityTypes";

export function GetCategoryByType (type: FilterType) {
    if (type === FilterType.MUG) return "mugs"
    if (type === FilterType.SHIRT) return "t-shirts"
    return ""
}

export function GetFieldsByPriority (priority: PriorityType) {
    if (priority === PriorityType.NEWEST) return {field: "created_at", order: "DSC"}
    if (priority === PriorityType.CRESCENT) return {field: "price_in_cents", order: "ASC"}
    if (priority === PriorityType.DECRESCENT) return {field: "price_in_cents", order: "DSC"}
    return {field: "sales", order: "DSC"}
}

export function mountQuery (type: FilterType, priority: PriorityType) {
    if (type === FilterType.ALL && priority === PriorityType.POPULARITY)
      return `
      query {
          allProducts (sortField: "sales", sortOrder: "DSC") {
            id
            name
            price_in_cents
            image_url
          }
        }
  `;
  
    const sortSettings = GetFieldsByPriority(priority);
    const categoryFilter = GetCategoryByType(type) ? `filter: {category: "${GetCategoryByType(type)}"},`: ""
  
    return `
    query {
      allProducts (${categoryFilter} sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}") {
        id
        name
        price_in_cents
        image_url
      }
    }
  `;
  };