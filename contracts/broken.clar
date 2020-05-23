(define-read-only (get-score)
    (ok 
        (tuple
            (score (get-zero))
        )
    )
)

(define-private (get-zero)
    0
)
