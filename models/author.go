package models

import (
	"encoding/json"
)

type Author struct {
	ID      int32
	Name    string
	Slug    string
	Image   string
	PostCnt int
}

type AuthorJSON struct {
	ID      int32  `json:"id, omitempty"`
	Name    string `json:"name, omitempty"`
	Slug    string `json:"slug, omitempty"`
	Image   string `json:"image"`
	PostCnt int    `json:"post_count"`
}

func (p *Author) MarshalJSON() ([]byte, error) {
	return json.Marshal(AuthorJSON{
		p.ID,
		p.Name,
		p.Slug,
		p.Image,
		p.PostCnt,
	})
}

func (p *Author) UnmarshalJSON(b []byte) error {
	temp := &AuthorJSON{}

	if err := json.Unmarshal(b, &temp); err != nil {
		return err
	}

	p.ID = temp.ID
	p.Name = temp.name
	p.Slug = temp.Slug
	p.Image = temp.Image
	p.PostCnt = temp.PostCnt

	return nil
}
