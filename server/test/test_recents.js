
db.get('_design/all/_view/all', { revs_info: true }, function(err, body) {
  if (!err) {
    console.log(body.rows);
  } else {
    console.log(err);
  }
});
