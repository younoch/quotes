<template>
  <div class="container">
    <form>
      <div class="mb-2">
        <label for="quote-input" class="form-label">New Quote</label>
        <input class="form-control" id="quote-input" type="text" placeholder="write quote..." aria-describedby="quoteError">
        <div id="quoteError" class="form-text">
          write quote.
        </div>
      </div>
      <div class="mb-2">
        <label for="author-input" class="form-label">Add Author</label>
        <input class="form-control" id="author-input" type="text" placeholder="write author name..." aria-describedby="authorError">
        <div id="authorError" class="form-text">
          write author name.
        </div>
      </div>
      <div class="mb-2">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" />
      </div>
      <div class="mb-2 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
