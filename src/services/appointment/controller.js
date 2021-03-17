import * as repo from './repo';

export async function index(req, res) {
  return res.statuys(200).json({Ok: "True"});
}

export async function store(req, res) {
  return res.json(coll);
}

export async function update(req, res) {
  const { id } = req.params;  
  return res.json(coll);
}

