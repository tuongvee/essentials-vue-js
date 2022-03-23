<template>
  <section class="mx-4">
    <h1
      :style="[styleTitle, { display: ['-webkit-box', '-ms-flexbox', 'flex'] }]"
    >
      {{ section }}
    </h1>
    <p v-show="ok">
      <span v-html="rawHtml"></span>
      {{ section.length > 1 ? "string" : "character" }}
    </p>
    <fancy-button @click.once="ok = !ok">
      Click to show at most once
    </fancy-button>
    <article class="shop-section">
      <div class="d-flex align-items-center align-self-center">
        <h2>{{ this.fullHeader }}</h2>
        <button
          v-if="editting === 'cancel'"
          @click.prevent="doEdit('search')"
          class="btn btn-primary"
        >
          Search items
        </button>
        <button
          v-if="editting === 'cancel'"
          @click.prevent="doEdit('add')"
          class="btn btn-primary"
        >
          Add items
        </button>

        <button v-else @click.prevent="doEdit('cancel')" class="btn btn-danger">
          Cancel
        </button>
      </div>
      <div v-if="editting === 'add'">
        <div class="d-flex align-items-center">
          <input
            type="text"
            @keyup.enter="saveItem"
            v-model="newItem"
            class="input-field"
            placeholder="Name of item"
          />
          <div class="mx-2">{{ this.charCount }}/200</div>
          <label class="mx-2">
            <input type="checkbox" v-model="newItemBestSeller" />
            Best Seller
          </label>
          <button @click="(event) => saveItem(event)" class="btn btn-success">
            Save Item
          </button>
        </div>
        <ul class="item-list">
          <li
            v-for="item in items"
            ref="items"
            :key="item.id"
            :class="[
              { bestseller: item.bestseller },
              'item',
              'd-flex',
              'align-items-center',
            ]"
          >
            <img :src="item.img" alt="Item Image" />
            <item-detail :item="item" />
          </li>
        </ul>
      </div>

      <div v-if="editting === 'search'">
        <div class="d-flex align-items-center">
          <input
            type="text"
            v-model="search"
            class="input-field"
            placeholder="Search ..."
          />
        </div>
        <ul class="item-list">
          <li
            v-for="item in filterItems"
            ref="items"
            :key="item.id"
            :class="[
              { bestseller: item.bestseller },
              'item',
              'd-flex',
              'align-items-center',
            ]"
          >
            <img :src="item.img" alt="Item Image" />
            <item-detail :item="item" />
          </li>
        </ul>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ItemDetail from "./ItemDetail.vue";
import FancyButton from "./FancyButton.vue";

export default defineComponent({
  name: "HomePage",
  components: { ItemDetail, FancyButton },
  props: {
    section: String,
  },
  data() {
    return {
      header: "Coffee Shop",
      myname: "Vee's",
      editting: "add",
      ok: false,
      newItem: "",
      search: "",
      newItemBestSeller: false,
      newItemImage:
        "https://cafeamazonvn.com/wp-content/uploads/2021/02/Iced-Mocha-150x150.png",
      items: [
        {
          id: 1,
          label: "Cà Phê Matcha Macchiato",
          img: "https://cafeamazonvn.com/wp-content/uploads/2017/01/Caphe-Matcha-Macchiato-150x150.png",
          bestseller: true,
        },
        {
          id: 2,
          label: "Chocolate Frappe",
          img: "https://cafeamazonvn.com/wp-content/uploads/2021/02/Chocolate-Frappe-150x150.png",
          bestseller: false,
        },
        {
          id: 3,
          label: "Iced Amazon",
          img: "https://cafeamazonvn.com/wp-content/uploads/2021/02/Iced-Amazon-150x150.png",
          bestseller: true,
        },
        {
          id: 4,
          label: "Caramel Macchiato",
          img: "https://cafeamazonvn.com/wp-content/uploads/2021/02/Caramel-Macchiato-Frappe-150x150.png",
          bestseller: false,
        },
        {
          id: 5,
          label: "Cà Phê Đá",
          img: "https://cafeamazonvn.com/wp-content/uploads/2021/02/Iced-Black-Coffee-150x150.png",
          bestseller: false,
        },
        {
          id: 6,
          label: "Latte Đá",
          img: "https://cafeamazonvn.com/wp-content/uploads/2021/02/Iced-Latte-750x750-1-150x150.png",
          bestseller: false,
        },
        {
          id: 7,
          label: "Trà Hoa Ngũ Sắc",
          img: "https://cafeamazonvn.com/wp-content/uploads/2021/02/Tra-Hoa-Ngu-Sac-150x150.png",
          bestseller: true,
        },
        {
          id: 8,
          label: "Trà Sữa Mầm Cây",
          img: "https://cafeamazonvn.com/wp-content/uploads/2017/01/Tra-Sua-Mam-Cay-150x150.png",
          bestseller: false,
        },
      ],
      styleTitle: {
        fontWeight: 500,
        color: "royalblue",
      },
      rawHtml: `<span style="color: red">⬆️ This header is a</span>`,
    };
  },
  computed: {
    fullHeader: {
      // getter
      get() {
        return this.myname + " " + this.header;
      },
      // setter
      set(newValue: string) {
        // Note: we are using destructuring assignment syntax here.
        [this.myname, this.header] = newValue.split(" ");
      },
    },
    charCount() {
      return this.newItem.length;
    },
    filterItems() {
      return this.items.filter((item) =>
        item.label.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
  methods: {
    doEdit(edit: string) {
      this.editting = edit;
    },
    saveItem(event: any) {
      if (event) {
        event.preventDefault();
        this.items.push({
          id: this.items.length + 1,
          label: this.newItem,
          img: this.newItemImage,
          bestseller: this.newItemBestSeller,
        });
        this.newItem = "";
      }

      alert("Item add successfully");
    },
  },
  mounted() {
    console.log(`the component is now mounted.`);
    console.log(this.$refs.items);
  },
});
</script>

<style scoped>
.shop-section {
  display: block;
  align-items: center;
  padding: 5px;
  margin: 10px 10px;
}
.input-form {
  display: flex;
  align-items: center;
}
.input-field {
  margin: 10px 0;
  margin-right: 5px;
  padding: 2px;
  height: 30px;
  width: 50%;
  border-radius: 3px;
  font-size: 16px;
}
.btn {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: white;
}
.item-list {
  list-style-type: circle;
}
.bestseller {
  color: chocolate;
}
.item {
  margin-bottom: 5px;
  font-weight: 500;
}

.item img {
  width: 80px;
}
</style>
