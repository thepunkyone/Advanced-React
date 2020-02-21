const Mutations = {
  async createItem(parent, args, ctx, info) {
    // TODO: Check if they are logged in

    const item = await ctx.db.mutation.createItem(
      {
        // db stands for database
        data: {
          ...args,
        },
      },
      info // makes sure to return the item from database when it is created
    )

    return item
  },
}

module.exports = Mutations
