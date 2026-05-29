import{M as c}from"./MpDataTableToolbar-CLsbOd2C.js";import{r as t,c as v}from"./iframe-Dzs8NioN.js";import"./MpFormDrawer-DY3lp8cZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const w={title:"Data Display/MpDataTableToolbar",component:c,tags:["autodocs"],parameters:{docs:{description:{component:'\n### Overview\nThe `MpDataTableToolbar` is the primary control surface above Data Tables. It handles searching, filtering, and bulk actions consistently across the application.\n\n### 🟢 Do\'s\n- **Do** always provide a clear `title` to give context to the data grid below it.\n- **Do** provide a specific `searchPlaceholder` like "Search contacts..." rather than generic "Search".\n- **Do** use the `#filter-content` slot for complex filtering needs, preferring `v-select` with `multiple chips` for array data.\n\n### 🔴 Don\'ts\n- **Don\'t** use this component outside of the context of a Data Table or large list view.\n- **Don\'t** hide primary actions inside the `#actions` slot if they are critical to the workflow (like "Create New"). Put those in the `MpPageHeader` instead.\n- **Don\'t** build custom active filter chips below the toolbar. Pass your active filters as an array of `{key, label}` to the `active-filters` prop and let the component render them.\n\n### 💡 Best Practices\n- **Bulk Actions:** Only show bulk actions (in the `#bulk-actions` slot) when rows are actually selected. Make dangerous actions (like Delete) use `color="error"`.\n- **Select All:** When feeding the `selected-count` and `total-count` props, ensure your `@select-all` handler accurately grabs all valid IDs to sync with the underlying `v-data-table`.\n- **Column Toggle:** Pass all column headers (including the non-toggleable `actions` key) via `:headers`. The toolbar automatically excludes non-toggleable keys. Bind `v-model:hidden-columns` and filter your headers computed before passing to `v-data-table`. The columns button is an icon button that shows a badge count of hidden columns.\n        '}}},argTypes:{title:{control:"text"},searchPlaceholder:{control:"text"},selectedCount:{control:"number"},totalCount:{control:"number"}}},p={render:r=>({components:{MpDataTableToolbar:c},setup(){const o=t("");return{args:r,search:o}},template:`
      <v-card variant="flat" border rounded="xl" class="overflow-hidden">
        <MpDataTableToolbar v-bind="args" v-model:search="search" />
      </v-card>
    `}),args:{title:"All Orders",searchPlaceholder:"Search orders…"}},m={render:r=>({components:{MpDataTableToolbar:c},setup(){const o=t(""),e=t([]),l=v(()=>e.value.length?[{key:"status",label:`Status: ${e.value.join(", ")}`}]:[]);function s(n){e.value=[]}function i(){e.value=[]}return{args:r,search:o,statusFilter:e,activeFilters:l,removeFilter:s,clearFilters:i}},template:`
      <v-card variant="flat" border rounded="xl" class="overflow-hidden">
        <MpDataTableToolbar
          v-bind="args"
          v-model:search="search"
          :active-filters="activeFilters"
          @remove-filter="removeFilter"
          @clear-filters="clearFilters"
        >
          <template #filter-content>
            <div class="pa-4 pb-2">
              <div class="text-subtitle-2 font-weight-bold mb-3">Filter by</div>
              <v-select
                v-model="statusFilter"
                label="Status"
                :items="['Sent', 'Draft', 'Scheduled', 'Archived']"
                multiple
                chips
                closable-chips
                variant="outlined"
                density="compact"
                hide-details
                clearable
                class="mb-3"
              />
            </div>
          </template>
        </MpDataTableToolbar>
      </v-card>
    `}),args:{title:"Campaign Reports",searchPlaceholder:"Search campaigns…"}},b={render:r=>({components:{MpDataTableToolbar:c},setup(){const o=t(""),e=t({status:[],category:[],vendor:[]}),l={status:"Status",category:"Category",vendor:"Vendor"},s=v(()=>Object.entries(e.value).filter(([,a])=>a.length>0).map(([a,u])=>({key:a,label:`${l[a]}: ${u.join(", ")}`})));function i(a){e.value[a]=[]}function n(){e.value={status:[],category:[],vendor:[]}}return{args:r,search:o,filters:e,activeFilters:s,removeFilter:i,clearFilters:n}},template:`
      <v-card variant="flat" border rounded="xl" class="overflow-hidden">
        <MpDataTableToolbar
          v-bind="args"
          v-model:search="search"
          :active-filters="activeFilters"
          @remove-filter="removeFilter"
          @clear-filters="clearFilters"
        >
          <template #filter-content>
            <div class="pa-4 pb-2">
              <div class="text-subtitle-2 font-weight-bold mb-3">Filter by</div>
              <v-select
                v-model="filters.status"
                label="Status"
                :items="['In Stock', 'Low Stock', 'Out of Stock']"
                multiple chips closable-chips
                variant="outlined" density="compact" hide-details clearable
                class="mb-3"
              />
              <v-select
                v-model="filters.category"
                label="Category"
                :items="['Electronics', 'Apparel', 'Home & Kitchen', 'Sports & Outdoors']"
                multiple chips closable-chips
                variant="outlined" density="compact" hide-details clearable
                class="mb-3"
              />
              <v-select
                v-model="filters.vendor"
                label="Vendor"
                :items="['Acme Corp', 'Brand House', 'Global Goods', 'Prime Supplier']"
                multiple chips closable-chips
                variant="outlined" density="compact" hide-details clearable
              />
            </div>
          </template>
        </MpDataTableToolbar>
      </v-card>
    `}),args:{title:"All Products",searchPlaceholder:"Search products…"}},h={render:r=>({components:{MpDataTableToolbar:c},setup(){const o=t(""),e=t({status:["Active","Draft"],category:["Electronics"]}),l={status:"Status",category:"Category"},s=v(()=>Object.entries(e.value).filter(([,a])=>a.length>0).map(([a,u])=>({key:a,label:`${l[a]}: ${u.join(", ")}`})));function i(a){e.value[a]=[]}function n(){e.value={status:[],category:[]}}return{args:r,search:o,filters:e,activeFilters:s,removeFilter:i,clearFilters:n}},template:`
      <v-card variant="flat" border rounded="xl" class="overflow-hidden">
        <MpDataTableToolbar
          v-bind="args"
          v-model:search="search"
          :active-filters="activeFilters"
          @remove-filter="removeFilter"
          @clear-filters="clearFilters"
        >
          <template #filter-content>
            <div class="pa-4 pb-2">
              <div class="text-subtitle-2 font-weight-bold mb-3">Filter by</div>
              <v-select v-model="filters.status" label="Status" :items="['Active', 'Draft', 'Archived']"
                multiple chips closable-chips variant="outlined" density="compact" hide-details clearable class="mb-3" />
              <v-select v-model="filters.category" label="Category" :items="['Electronics', 'Apparel', 'Home & Kitchen']"
                multiple chips closable-chips variant="outlined" density="compact" hide-details clearable />
            </div>
          </template>
        </MpDataTableToolbar>
      </v-card>
    `}),args:{title:"All Products",searchPlaceholder:"Search…"}},f={render:r=>({components:{MpDataTableToolbar:c},setup(){const o=t(""),e=t(4),l=t(40);function s(){e.value=l.value}function i(){e.value=0}return{args:r,search:o,selectedCount:e,totalCount:l,selectAll:s,clearSelection:i}},template:`
      <v-card variant="flat" border rounded="xl" class="overflow-hidden">
        <MpDataTableToolbar
          v-bind="args"
          v-model:search="search"
          :selected-count="selectedCount"
          :total-count="totalCount"
          @select-all="selectAll"
          @clear-selection="clearSelection"
        >
          <template #bulk-actions>
            <v-btn variant="outlined" size="small" class="text-none" prepend-icon="share" rounded="lg">Export</v-btn>
            <v-btn variant="outlined" size="small" class="text-none" prepend-icon="tag" rounded="lg">Tag</v-btn>
            <v-btn variant="outlined" size="small" class="text-none text-error" prepend-icon="trash-2" rounded="lg">Delete</v-btn>
          </template>
        </MpDataTableToolbar>
      </v-card>
    `}),args:{title:"All Contacts",searchPlaceholder:"Search contacts…"}},g={render:r=>({components:{MpDataTableToolbar:c},setup(){const o=t(""),e=t([]),l=[{title:"Contact",key:"contact",sortable:!0},{title:"Company",key:"company"},{title:"Tags",key:"tags",sortable:!1},{title:"Status",key:"status"},{title:"Score",key:"score",align:"end"},{title:"Last Active",key:"lastActive",align:"end"},{title:"",key:"actions",align:"end",sortable:!1,width:"48px"}],s=v(()=>l.filter(i=>!e.value.includes(i.key)));return{args:r,search:o,hiddenColumns:e,sampleHeaders:l,visibleHeaders:s}},template:`
      <v-card variant="flat" border rounded="xl" class="overflow-hidden">
        <MpDataTableToolbar
          v-bind="args"
          v-model:search="search"
          v-model:hidden-columns="hiddenColumns"
          :headers="sampleHeaders"
        />
        <div class="pa-4 text-body-2 text-medium-emphasis">
          <strong>Visible columns:</strong> {{ visibleHeaders.map(h => h.title || h.key).join(', ') }}
          <br />
          <strong>Hidden:</strong> {{ hiddenColumns.length ? hiddenColumns.join(', ') : 'none' }}
        </div>
      </v-card>
    `}),args:{title:"All Contacts",searchPlaceholder:"Search contacts…"}},y={render:r=>({components:{MpDataTableToolbar:c},setup(){const o=t(""),e=t(3),l=t(28),s=t({status:["Active"],list:[]}),i={status:"Status",list:"List"},n=v(()=>Object.entries(s.value).filter(([,d])=>d.length>0).map(([d,S])=>({key:d,label:`${i[d]}: ${S.join(", ")}`})));function a(d){s.value[d]=[]}function u(){s.value={status:[],list:[]}}function F(){e.value=l.value}function T(){e.value=0}return{args:r,search:o,filters:s,activeFilters:n,selectedCount:e,totalCount:l,removeFilter:a,clearFilters:u,selectAll:F,clearSelection:T}},template:`
      <v-card variant="flat" border rounded="xl" class="overflow-hidden">
        <MpDataTableToolbar
          v-bind="args"
          v-model:search="search"
          :active-filters="activeFilters"
          :selected-count="selectedCount"
          :total-count="totalCount"
          @remove-filter="removeFilter"
          @clear-filters="clearFilters"
          @select-all="selectAll"
          @clear-selection="clearSelection"
        >
          <template #filter-content>
            <div class="pa-4 pb-2">
              <div class="text-subtitle-2 font-weight-bold mb-3">Filter by</div>
              <v-select v-model="filters.status" label="Status"
                :items="['Active', 'Unsubscribed', 'Bounced']"
                multiple chips closable-chips variant="outlined" density="compact" hide-details clearable class="mb-3" />
              <v-select v-model="filters.list" label="List"
                :items="['Newsletter', 'VIP Circle', 'Win-Back']"
                multiple chips closable-chips variant="outlined" density="compact" hide-details clearable />
            </div>
          </template>
          <template #bulk-actions>
            <v-btn variant="outlined" size="small" class="text-none" prepend-icon="share" rounded="lg">Export</v-btn>
            <v-btn variant="outlined" size="small" class="text-none" prepend-icon="tags" rounded="lg">Tag</v-btn>
            <v-btn variant="outlined" size="small" class="text-none text-error" prepend-icon="trash-2" rounded="lg">Delete</v-btn>
          </template>
          <template #actions>
            <v-btn variant="outlined" size="small" class="text-none" prepend-icon="download">Export All</v-btn>
          </template>
        </MpDataTableToolbar>
      </v-card>
    `}),args:{title:"All Contacts",searchPlaceholder:"Search contacts…"}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      MpDataTableToolbar
    },
    setup() {
      const search = ref('');
      return {
        args,
        search
      };
    },
    template: \`
      <v-card variant="flat" border rounded="xl" class="overflow-hidden">
        <MpDataTableToolbar v-bind="args" v-model:search="search" />
      </v-card>
    \`
  }),
  args: {
    title: 'All Orders',
    searchPlaceholder: 'Search orders…'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      MpDataTableToolbar
    },
    setup() {
      const search = ref('');
      const statusFilter = ref<string[]>([]);
      const activeFilters = computed(() => statusFilter.value.length ? [{
        key: 'status',
        label: \`Status: \${statusFilter.value.join(', ')}\`
      }] : []);
      function removeFilter(_key: string) {
        statusFilter.value = [];
      }
      function clearFilters() {
        statusFilter.value = [];
      }
      return {
        args,
        search,
        statusFilter,
        activeFilters,
        removeFilter,
        clearFilters
      };
    },
    template: \`
      <v-card variant="flat" border rounded="xl" class="overflow-hidden">
        <MpDataTableToolbar
          v-bind="args"
          v-model:search="search"
          :active-filters="activeFilters"
          @remove-filter="removeFilter"
          @clear-filters="clearFilters"
        >
          <template #filter-content>
            <div class="pa-4 pb-2">
              <div class="text-subtitle-2 font-weight-bold mb-3">Filter by</div>
              <v-select
                v-model="statusFilter"
                label="Status"
                :items="['Sent', 'Draft', 'Scheduled', 'Archived']"
                multiple
                chips
                closable-chips
                variant="outlined"
                density="compact"
                hide-details
                clearable
                class="mb-3"
              />
            </div>
          </template>
        </MpDataTableToolbar>
      </v-card>
    \`
  }),
  args: {
    title: 'Campaign Reports',
    searchPlaceholder: 'Search campaigns…'
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      MpDataTableToolbar
    },
    setup() {
      const search = ref('');
      const filters = ref({
        status: [] as string[],
        category: [] as string[],
        vendor: [] as string[]
      });
      const filterLabels: Record<string, string> = {
        status: 'Status',
        category: 'Category',
        vendor: 'Vendor'
      };
      const activeFilters = computed(() => Object.entries(filters.value).filter(([, v]) => v.length > 0).map(([key, value]) => ({
        key,
        label: \`\${filterLabels[key]}: \${(value as string[]).join(', ')}\`
      })));
      function removeFilter(key: string) {
        ;
        (filters.value as any)[key] = [];
      }
      function clearFilters() {
        filters.value = {
          status: [],
          category: [],
          vendor: []
        };
      }
      return {
        args,
        search,
        filters,
        activeFilters,
        removeFilter,
        clearFilters
      };
    },
    template: \`
      <v-card variant="flat" border rounded="xl" class="overflow-hidden">
        <MpDataTableToolbar
          v-bind="args"
          v-model:search="search"
          :active-filters="activeFilters"
          @remove-filter="removeFilter"
          @clear-filters="clearFilters"
        >
          <template #filter-content>
            <div class="pa-4 pb-2">
              <div class="text-subtitle-2 font-weight-bold mb-3">Filter by</div>
              <v-select
                v-model="filters.status"
                label="Status"
                :items="['In Stock', 'Low Stock', 'Out of Stock']"
                multiple chips closable-chips
                variant="outlined" density="compact" hide-details clearable
                class="mb-3"
              />
              <v-select
                v-model="filters.category"
                label="Category"
                :items="['Electronics', 'Apparel', 'Home & Kitchen', 'Sports & Outdoors']"
                multiple chips closable-chips
                variant="outlined" density="compact" hide-details clearable
                class="mb-3"
              />
              <v-select
                v-model="filters.vendor"
                label="Vendor"
                :items="['Acme Corp', 'Brand House', 'Global Goods', 'Prime Supplier']"
                multiple chips closable-chips
                variant="outlined" density="compact" hide-details clearable
              />
            </div>
          </template>
        </MpDataTableToolbar>
      </v-card>
    \`
  }),
  args: {
    title: 'All Products',
    searchPlaceholder: 'Search products…'
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      MpDataTableToolbar
    },
    setup() {
      const search = ref('');
      const filters = ref({
        status: ['Active', 'Draft'] as string[],
        category: ['Electronics'] as string[]
      });
      const filterLabels: Record<string, string> = {
        status: 'Status',
        category: 'Category'
      };
      const activeFilters = computed(() => Object.entries(filters.value).filter(([, v]) => v.length > 0).map(([key, value]) => ({
        key,
        label: \`\${filterLabels[key]}: \${(value as string[]).join(', ')}\`
      })));
      function removeFilter(key: string) {
        ;
        (filters.value as any)[key] = [];
      }
      function clearFilters() {
        filters.value = {
          status: [],
          category: []
        };
      }
      return {
        args,
        search,
        filters,
        activeFilters,
        removeFilter,
        clearFilters
      };
    },
    template: \`
      <v-card variant="flat" border rounded="xl" class="overflow-hidden">
        <MpDataTableToolbar
          v-bind="args"
          v-model:search="search"
          :active-filters="activeFilters"
          @remove-filter="removeFilter"
          @clear-filters="clearFilters"
        >
          <template #filter-content>
            <div class="pa-4 pb-2">
              <div class="text-subtitle-2 font-weight-bold mb-3">Filter by</div>
              <v-select v-model="filters.status" label="Status" :items="['Active', 'Draft', 'Archived']"
                multiple chips closable-chips variant="outlined" density="compact" hide-details clearable class="mb-3" />
              <v-select v-model="filters.category" label="Category" :items="['Electronics', 'Apparel', 'Home & Kitchen']"
                multiple chips closable-chips variant="outlined" density="compact" hide-details clearable />
            </div>
          </template>
        </MpDataTableToolbar>
      </v-card>
    \`
  }),
  args: {
    title: 'All Products',
    searchPlaceholder: 'Search…'
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      MpDataTableToolbar
    },
    setup() {
      const search = ref('');
      const selectedCount = ref(4);
      const totalCount = ref(40);
      function selectAll() {
        selectedCount.value = totalCount.value;
      }
      function clearSelection() {
        selectedCount.value = 0;
      }
      return {
        args,
        search,
        selectedCount,
        totalCount,
        selectAll,
        clearSelection
      };
    },
    template: \`
      <v-card variant="flat" border rounded="xl" class="overflow-hidden">
        <MpDataTableToolbar
          v-bind="args"
          v-model:search="search"
          :selected-count="selectedCount"
          :total-count="totalCount"
          @select-all="selectAll"
          @clear-selection="clearSelection"
        >
          <template #bulk-actions>
            <v-btn variant="outlined" size="small" class="text-none" prepend-icon="share" rounded="lg">Export</v-btn>
            <v-btn variant="outlined" size="small" class="text-none" prepend-icon="tag" rounded="lg">Tag</v-btn>
            <v-btn variant="outlined" size="small" class="text-none text-error" prepend-icon="trash-2" rounded="lg">Delete</v-btn>
          </template>
        </MpDataTableToolbar>
      </v-card>
    \`
  }),
  args: {
    title: 'All Contacts',
    searchPlaceholder: 'Search contacts…'
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      MpDataTableToolbar
    },
    setup() {
      const search = ref('');
      const hiddenColumns = ref<string[]>([]);
      const sampleHeaders = [{
        title: 'Contact',
        key: 'contact',
        sortable: true
      }, {
        title: 'Company',
        key: 'company'
      }, {
        title: 'Tags',
        key: 'tags',
        sortable: false
      }, {
        title: 'Status',
        key: 'status'
      }, {
        title: 'Score',
        key: 'score',
        align: 'end' as const
      }, {
        title: 'Last Active',
        key: 'lastActive',
        align: 'end' as const
      }, {
        title: '',
        key: 'actions',
        align: 'end' as const,
        sortable: false,
        width: '48px'
      }];
      const visibleHeaders = computed(() => sampleHeaders.filter(h => !hiddenColumns.value.includes(h.key)));
      return {
        args,
        search,
        hiddenColumns,
        sampleHeaders,
        visibleHeaders
      };
    },
    template: \`
      <v-card variant="flat" border rounded="xl" class="overflow-hidden">
        <MpDataTableToolbar
          v-bind="args"
          v-model:search="search"
          v-model:hidden-columns="hiddenColumns"
          :headers="sampleHeaders"
        />
        <div class="pa-4 text-body-2 text-medium-emphasis">
          <strong>Visible columns:</strong> {{ visibleHeaders.map(h => h.title || h.key).join(', ') }}
          <br />
          <strong>Hidden:</strong> {{ hiddenColumns.length ? hiddenColumns.join(', ') : 'none' }}
        </div>
      </v-card>
    \`
  }),
  args: {
    title: 'All Contacts',
    searchPlaceholder: 'Search contacts…'
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      MpDataTableToolbar
    },
    setup() {
      const search = ref('');
      const selectedCount = ref(3);
      const totalCount = ref(28);
      const filters = ref({
        status: ['Active'] as string[],
        list: [] as string[]
      });
      const filterLabels: Record<string, string> = {
        status: 'Status',
        list: 'List'
      };
      const activeFilters = computed(() => Object.entries(filters.value).filter(([, v]) => v.length > 0).map(([key, value]) => ({
        key,
        label: \`\${filterLabels[key]}: \${(value as string[]).join(', ')}\`
      })));
      function removeFilter(key: string) {
        ;
        (filters.value as any)[key] = [];
      }
      function clearFilters() {
        filters.value = {
          status: [],
          list: []
        };
      }
      function selectAll() {
        selectedCount.value = totalCount.value;
      }
      function clearSelection() {
        selectedCount.value = 0;
      }
      return {
        args,
        search,
        filters,
        activeFilters,
        selectedCount,
        totalCount,
        removeFilter,
        clearFilters,
        selectAll,
        clearSelection
      };
    },
    template: \`
      <v-card variant="flat" border rounded="xl" class="overflow-hidden">
        <MpDataTableToolbar
          v-bind="args"
          v-model:search="search"
          :active-filters="activeFilters"
          :selected-count="selectedCount"
          :total-count="totalCount"
          @remove-filter="removeFilter"
          @clear-filters="clearFilters"
          @select-all="selectAll"
          @clear-selection="clearSelection"
        >
          <template #filter-content>
            <div class="pa-4 pb-2">
              <div class="text-subtitle-2 font-weight-bold mb-3">Filter by</div>
              <v-select v-model="filters.status" label="Status"
                :items="['Active', 'Unsubscribed', 'Bounced']"
                multiple chips closable-chips variant="outlined" density="compact" hide-details clearable class="mb-3" />
              <v-select v-model="filters.list" label="List"
                :items="['Newsletter', 'VIP Circle', 'Win-Back']"
                multiple chips closable-chips variant="outlined" density="compact" hide-details clearable />
            </div>
          </template>
          <template #bulk-actions>
            <v-btn variant="outlined" size="small" class="text-none" prepend-icon="share" rounded="lg">Export</v-btn>
            <v-btn variant="outlined" size="small" class="text-none" prepend-icon="tags" rounded="lg">Tag</v-btn>
            <v-btn variant="outlined" size="small" class="text-none text-error" prepend-icon="trash-2" rounded="lg">Delete</v-btn>
          </template>
          <template #actions>
            <v-btn variant="outlined" size="small" class="text-none" prepend-icon="download">Export All</v-btn>
          </template>
        </MpDataTableToolbar>
      </v-card>
    \`
  }),
  args: {
    title: 'All Contacts',
    searchPlaceholder: 'Search contacts…'
  }
}`,...y.parameters?.docs?.source}}};const M=["Default","WithSingleFilter","WithMultipleFilters","WithActiveFilters","WithBulkActions","WithColumnToggle","FullFeatured"];export{p as Default,y as FullFeatured,h as WithActiveFilters,f as WithBulkActions,g as WithColumnToggle,b as WithMultipleFilters,m as WithSingleFilter,M as __namedExportsOrder,w as default};
