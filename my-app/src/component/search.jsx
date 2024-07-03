import React from 'react'

const search = () => {
  return (
    <div>
      <div className="input-group">
  <div className="form-outline" data-mdb-input-init>
    <input type="search" id="form1" class="form-control" />
    <label class="form-label" for="form1">Search</label>
  </div>
  <button type="button" class="btn btn-primary" data-mdb-ripple-init>
    <i className="fas fa-search"></i>
  </button>
</div>
    </div>
  )
}

export default search
