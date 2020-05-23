(define-private (get-zero)
    0
)

(define-read-only (get-score)
    (ok 
        (tuple
            (score (get-zero))
        )
    )
)