# mwt.towebu.com

Hugo website for `mwt`, the multi-worktree Git workflow coordinator.

## Development

```bash
hugo server --bind 127.0.0.1 --baseURL http://127.0.0.1:1313/
```

Build the static site:

```bash
hugo --minify
```

The deployed site uses the custom domain `mwt.towebu.com`, configured in
`static/CNAME` and the GitHub Pages workflow.
